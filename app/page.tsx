'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Coins, PieChart, TrendingUp } from 'lucide-react'
import Link from "next/link"
// import Link from "next/link"
// another test - this time creating a new git branch: testbranch
//  test3 - this time creating a new git branch: testbranch
//  test4 - this time creating a new git branch: testbranch
// test5 - this is created for {testbranchnew} 



export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Coins className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-gray-900">InvestBond</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Solution
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Value
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Investment
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Resources
            </Link>
          </nav>
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
            Contact us
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Interested in maximizing your{" "}
            <span className="text-blue-600">
              investment
            </span>{" "}
            returns?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Invest with us today and earn a 10% return with minimal risk through our
            tokenized treasuries and corporate bonds.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Join Beta
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
              Book a demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 p-8 text-gray-900 shadow-lg"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-300/20 blur-2xl" />
            <PieChart className="h-12 w-12 mb-4 text-blue-600" />
            <h3 className="text-5xl font-bold mb-2">2.5%</h3>
            <p className="text-lg font-medium mb-1">Compound Finance</p>
            <p className="text-sm text-gray-600">2.5% APY</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-100 to-green-200 p-8 text-gray-900 shadow-lg"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-green-300/20 blur-2xl" />
            <Coins className="h-12 w-12 mb-4 text-green-600" />
            <h3 className="text-5xl font-bold mb-2">10%</h3>
            <p className="text-lg font-medium mb-1">US Treasuries</p>
            <p className="text-sm text-gray-600">10% APY</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-purple-200 p-8 text-gray-900 shadow-lg"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-purple-300/20 blur-2xl" />
            <TrendingUp className="h-12 w-12 mb-4 text-purple-600" />
            <h3 className="text-5xl font-bold mb-2">15%</h3>
            <p className="text-lg font-medium mb-1">Corporate Bond</p>
            <p className="text-sm text-gray-600">15% APY</p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

