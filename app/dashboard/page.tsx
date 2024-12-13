'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

// Define types for our investment data
type Investment = {
  id: number;
  name: string;
  description: string;
  image: string;
  yield: number;
  rating: string;
  maturity: string;
  ratingAgency: string;
  balanceTenure: number;
  interestPaymentFrequency: string;
}

type InvestmentCategory = {
  [key: string]: Investment[];
}

// Sample data for investments
const investments: InvestmentCategory = {
  governmentBonds: [
    {
      id: 1,
      name: "7.32% GOI 2024",
      description: "Government of India Treasury Bond",
      image: "/placeholder.svg?height=400&width=600&text=GOI+2024",
      yield: 7.32,
      rating: "AAA",
      maturity: "2024",
      ratingAgency: "N/A",
      balanceTenure: 1,
      interestPaymentFrequency: "semi-annually"
    },
    {
      id: 2,
      name: "Maharashtra SDL 2025",
      description: "State Development Loan",
      image: "/placeholder.svg?height=400&width=600&text=Maharashtra+SDL",
      yield: 7.89,
      rating: "State Govt",
      maturity: "2025",
      ratingAgency: "N/A",
      balanceTenure: 2,
      interestPaymentFrequency: "annually"
    },
  ],
  bankFDs: [
    {
      id: 1,
      name: "HDFC Bank Special FD",
      description: "Premium Fixed Deposit Scheme",
      image: "/placeholder.svg?height=400&width=600&text=HDFC+Bank+FD",
      yield: 7.75,
      rating: "FAAA",
      maturity: "3 years",
      ratingAgency: "CRISIL",
      balanceTenure: 3,
      interestPaymentFrequency: "quarterly"
    },
    {
      id: 2,
      name: "ICICI Bank Tax Saver FD",
      description: "Tax Saving Fixed Deposit",
      image: "/placeholder.svg?height=400&width=600&text=ICICI+Bank+FD",
      yield: 7.50,
      rating: "FAAA",
      maturity: "5 years",
      ratingAgency: "ICRA",
      balanceTenure: 5,
      interestPaymentFrequency: "annually"
    },
  ],
  corporateBonds: [
    {
      id: 1,
      name: "TATA Motors 2026",
      description: "Senior Secured Corporate Bond",
      image: "/placeholder.svg?height=400&width=600&text=TATA+Motors+Bond",
      yield: 8.84,
      rating: "AA+",
      maturity: "2026",
      ratingAgency: "CARE",
      balanceTenure: 4,
      interestPaymentFrequency: "annually"
    },
    {
      id: 2,
      name: "L&T Finance 2025",
      description: "Non-Convertible Debentures",
      image: "/placeholder.svg?height=400&width=600&text=L%26T+Finance+Bond",
      yield: 8.65,
      rating: "AAA",
      maturity: "2025",
      ratingAgency: "ICRA",
      balanceTenure: 3,
      interestPaymentFrequency: "semi-annually"
    },
  ]
}

export default function Dashboard() {
  // State to track the currently active navigation category
  const [activeCategory, setActiveCategory] = useState<string>('home');

  // State to control the visibility of the main navigation menu
  const [isMainNavOpen, setIsMainNavOpen] = useState<boolean>(true);

  // State to store the current state of all filter options
  const [filters, setFilters] = useState({
    categories: {
      all: true,
      governmentBonds: true,
      bankFDs: true,
      corporateBonds: true,
    },
    yieldRanges: {
      all: true,
      '8-10': false,
      '10-12': false,
      '12-14': false,
    },
    balanceTenure: {
      all: true,
      '0-1': false,
      '1-3': false,
      '3-5': false,
      '>5': false,
    },
    interestPaymentFrequency: {
      all: true,
      monthly: false,
      quarterly: false,
      'semi-annually': false,
      annually: false,
      cumulative: false,
    },
    creditRating: {
      all: true,
      AAA: false,
      AA: false,
      A: false,
      BBB: false,
      BB: false,
      B: false,
    }
  });

  // Add searchQuery state
  const [searchQuery, setSearchQuery] = useState<string>('');

  /**
   * Handles changes to filter options
   * @param filterType - The type of filter being changed
   * @param filterName - The specific filter option being toggled
   * @returns void
   */
  const handleFilterChange = (filterType: keyof typeof filters, filterName: string): void => {
    setFilters(prevFilters => {
      const updatedCategory = { ...prevFilters[filterType] };
      if (filterName === 'all') {
        const newValue = !updatedCategory.all;
        Object.keys(updatedCategory).forEach(key => {
          updatedCategory[key] = newValue;
        });
      } else {
        updatedCategory[filterName] = !updatedCategory[filterName];
        updatedCategory.all = Object.keys(updatedCategory).every(key => key === 'all' || updatedCategory[key]);
      }
      return { ...prevFilters, [filterType]: updatedCategory };
    });
  };

  /**
   * Applies filters and search to the investments data
   * @param investments - The original investments data
   * @returns InvestmentCategory - Filtered investments data
   */
  const filterInvestments = (investments: InvestmentCategory): InvestmentCategory => {
    const filteredInvestments: InvestmentCategory = {
      governmentBonds: [],
      bankFDs: [],
      corporateBonds: []
    };

    Object.entries(investments).forEach(([category, items]) => {
      if (filters.categories.all || filters.categories[category as keyof typeof filters.categories]) {
        filteredInvestments[category] = items.filter(item => {
          const yield_value = item.yield;
          const balance_tenure = item.balanceTenure;
          const interest_frequency = item.interestPaymentFrequency;
          const credit_rating = item.rating;

          const yieldFilter = 
            filters.yieldRanges.all ||
            (filters.yieldRanges['8-10'] && yield_value >= 8 && yield_value < 10) ||
            (filters.yieldRanges['10-12'] && yield_value >= 10 && yield_value < 12) ||
            (filters.yieldRanges['12-14'] && yield_value >= 12 && yield_value <= 14);

          const tenureFilter =
            filters.balanceTenure.all ||
            (filters.balanceTenure['0-1'] && balance_tenure <= 1) ||
            (filters.balanceTenure['1-3'] && balance_tenure > 1 && balance_tenure <= 3) ||
            (filters.balanceTenure['3-5'] && balance_tenure > 3 && balance_tenure <= 5) ||
            (filters.balanceTenure['>5'] && balance_tenure > 5);

          const frequencyFilter =
            filters.interestPaymentFrequency.all ||
            filters.interestPaymentFrequency[interest_frequency as keyof typeof filters.interestPaymentFrequency];

          const ratingFilter =
            filters.creditRating.all ||
            filters.creditRating[credit_rating as keyof typeof filters.creditRating];

          const searchFilter = 
            searchQuery === '' ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

          return yieldFilter && tenureFilter && frequencyFilter && ratingFilter && searchFilter;
        });
      }
    });

    return filteredInvestments;
  };

  // Apply filters to get filtered investments
  const filteredInvestments = filterInvestments(investments);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <span className="text-xl font-bold">Upto14</span>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <Button 
              onClick={() => setIsMainNavOpen(!isMainNavOpen)}
              variant="ghost"
              className="w-full text-left font-semibold mb-2"
            >
              Main Navigation
            </Button>
            {isMainNavOpen && (
              <div className="space-y-2">
                {['home', 'transactions', 'ideas', 'track', 'settings'].map((item) => (
                  <Button
                    key={item}
                    onClick={() => setActiveCategory(item)}
                    variant={activeCategory === item ? 'secondary' : 'ghost'}
                    className="w-full text-left"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Filters</h3>
            {Object.entries(filters).map(([filterType, filterValues]) => (
              <div key={filterType} className="mb-4">
                <Button variant="ghost" className="w-full text-left font-medium mb-1">
                  {filterType}
                </Button>
                <div className="space-y-1">
                  {Object.entries(filterValues).map(([key, value]) => (
                    <Button
                      key={key}
                      onClick={() => handleFilterChange(filterType as keyof typeof filters, key)}
                      variant={value ? 'secondary' : 'ghost'}
                      size="sm"
                      className="w-full text-left"
                    >
                      {key === 'all' ? 'All' : key}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Investment Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Input
                type="text"
                placeholder="Search investments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
              <Button variant="outline">View All</Button>
            </div>
          </div>
        </header>

        <main className="p-4 md:p-6 space-y-6 md:space-y-8">
          {Object.entries(filteredInvestments).map(([category, investments]) => 
            investments.length > 0 && (
              <section key={category} className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {category === 'governmentBonds' ? 'Government Bonds' : 
                     category === 'bankFDs' ? 'Bank Fixed Deposits' : 
                     'Corporate Bonds'}
                  </h2>
                  <Button variant="link">View All</Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {investments.map((investment) => (
                    <div key={investment.id} className="bg-white overflow-hidden shadow rounded-lg">
                      <img
                        src={investment.image}
                        alt={investment.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900">{investment.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">{investment.description}</p>
                        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="font-medium">Yield:</span> {investment.yield}%
                          </div>
                          <div>
                            <span className="font-medium">Rating:</span> {investment.rating}
                          </div>
                          <div>
                            <span className="font-medium">Tenure:</span> {investment.balanceTenure} years
                          </div>
                          <div>
                            <span className="font-medium">Frequency:</span> {investment.interestPaymentFrequency}
                          </div>
                          <div className="col-span-2">
                            <span className="font-medium">Agency:</span> {investment.ratingAgency}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
          )}
          {Object.values(filteredInvestments).every(arr => arr.length === 0) && (
            <div className="text-center text-gray-500 mt-8">
              No investments found matching your search criteria.
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

