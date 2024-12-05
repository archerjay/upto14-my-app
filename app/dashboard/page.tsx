'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, TrendingUp, BarChart, PieChart } from 'lucide-react'

export default function Dashboard() {
  const investmentOpportunities = [
    { title: "Indian Treasury Bonds", apy: "7.5%", risk: "Low", icon: Coins },
    { title: "Corporate Bonds", apy: "14.0%", risk: "Medium", icon: TrendingUp },
    { title: "High-Yield Bank FD", apy: "9.0", risk: "Low", icon: BarChart },
    { title: "Commercial Real Estate Rentals", apy: "8.0", risk: "Medium", icon: PieChart },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Investment Opportunities</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {investmentOpportunities.map((opportunity, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {opportunity.title}
                    </CardTitle>
                    <opportunity.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{opportunity.apy} APY</div>
                    <p className="text-xs text-muted-foreground">
                      Risk: {opportunity.risk}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore More Opportunities
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

