'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Coins, PieChart, TrendingUp } from 'lucide-react'
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black">
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Coins className="h-6 w-6 text-violet-500" />
            <span className="font-bold text-white">InvestBond</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Solution
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Value
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Investment
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Resources
            </Link>
          </nav>
          <Button variant="default" className="bg-violet-600 hover:bg-violet-700">
            Contact us
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Interested in maximizing your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
              investment
            </span>{" "}
            returns?
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Invest with us today and earn a 10% return with minimal risk through our
            tokenized treasuries and corporate bonds.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button className="bg-violet-600 hover:bg-violet-700">
              Join Beta
            </Button>
            <Button variant="outline" className="border-zinc-800 text-white hover:bg-zinc-800">
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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400 to-blue-600 p-8 text-white"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
            <PieChart className="h-12 w-12 mb-4" />
            <h3 className="text-5xl font-bold mb-2">2.5%</h3>
            <p className="text-lg font-medium mb-1">Compound Finance</p>
            <p className="text-sm text-white/80">2.5% APY</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-600 p-8 text-white"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
            <Coins className="h-12 w-12 mb-4" />
            <h3 className="text-5xl font-bold mb-2">10%</h3>
            <p className="text-lg font-medium mb-1">US Treasuries</p>
            <p className="text-sm text-white/80">10% APY</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-white"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
            <TrendingUp className="h-12 w-12 mb-4" />
            <h3 className="text-5xl font-bold mb-2">15%</h3>
            <p className="text-lg font-medium mb-1">Corporate Bond</p>
            <p className="text-sm text-white/80">15% APY</p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

