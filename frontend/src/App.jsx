import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Rocket, Zap, TrendingUp, Coins, Sparkles, ArrowRight } from 'lucide-react'
import './App.css'
import logoWithBg from './assets/logo-with-background.jpg'
import logo from './assets/logo.jpg'

function App() {
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [tokenSupply, setTokenSupply] = useState('')

  const handleCreateToken = () => {
    console.log('Creating token:', { tokenName, tokenSymbol, tokenSupply })
    // TODO: Integrate with backend API
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
      
      {/* Stars Animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Pumpx Logo" className="w-16 h-16 rounded-full border-4 border-yellow-400 shadow-lg shadow-yellow-400/50" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              PUMPX
            </h1>
          </div>
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:scale-105 transition-transform">
            Connect Wallet
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src={logoWithBg} 
            alt="Pumpx Hero" 
            className="w-96 h-96 object-contain animate-float drop-shadow-2xl"
          />
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
          PUMP
        </h2>
        
        <p className="text-2xl md:text-3xl mb-8 text-cyan-300 font-bold tracking-wider">
          The Future of Token Launchpad on Solana
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
          Create, launch, and trade tokens instantly with AI-powered management. 
          Join the revolution and pump your tokens to the moon! 🚀
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-pink-500/50 hover:scale-110 transition-all">
            <Rocket className="mr-2" />
            Launch Token
          </Button>
          <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-lg px-8 py-6 rounded-full transition-all">
            <TrendingUp className="mr-2" />
            Explore Tokens
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-black/40 border-2 border-yellow-400/50 backdrop-blur-sm hover:border-yellow-400 transition-all hover:scale-105">
            <CardHeader>
              <Zap className="w-12 h-12 text-yellow-400 mb-2" />
              <CardTitle className="text-yellow-400">Instant Launch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Create and deploy your token in seconds with our AI-powered platform</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-2 border-cyan-400/50 backdrop-blur-sm hover:border-cyan-400 transition-all hover:scale-105">
            <CardHeader>
              <Sparkles className="w-12 h-12 text-cyan-400 mb-2" />
              <CardTitle className="text-cyan-400">AI Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">24/7 AI support for marketing, community building, and viral growth</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-2 border-pink-400/50 backdrop-blur-sm hover:border-pink-400 transition-all hover:scale-105">
            <CardHeader>
              <Coins className="w-12 h-12 text-pink-400 mb-2" />
              <CardTitle className="text-pink-400">Auto Listing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Automatic listing on Raydium, CoinMarketCap, Dextools, and more</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Token Creation Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <Card className="max-w-2xl mx-auto bg-black/60 border-4 border-purple-500/50 backdrop-blur-md shadow-2xl shadow-purple-500/50">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Create Your Token
            </CardTitle>
            <CardDescription className="text-center text-gray-300 text-lg">
              Launch your token on Solana in just a few clicks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="tokenName" className="text-white text-lg">Token Name</Label>
              <Input
                id="tokenName"
                placeholder="e.g., Pumpx Token"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                className="bg-black/50 border-purple-500/50 text-white placeholder:text-gray-500 text-lg py-6"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tokenSymbol" className="text-white text-lg">Token Symbol</Label>
              <Input
                id="tokenSymbol"
                placeholder="e.g., PXP"
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
                className="bg-black/50 border-purple-500/50 text-white placeholder:text-gray-500 text-lg py-6"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tokenSupply" className="text-white text-lg">Total Supply</Label>
              <Input
                id="tokenSupply"
                type="number"
                placeholder="e.g., 1000000000"
                value={tokenSupply}
                onChange={(e) => setTokenSupply(e.target.value)}
                className="bg-black/50 border-purple-500/50 text-white placeholder:text-gray-500 text-lg py-6"
              />
            </div>

            <Button 
              onClick={handleCreateToken}
              className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-black font-bold text-xl py-7 rounded-lg shadow-lg hover:scale-105 transition-all"
            >
              <Rocket className="mr-2" />
              Launch Token Now
              <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-4 py-12 text-center border-t border-purple-500/30">
        <p className="text-gray-400 mb-4">
          © 2025 Pumpx. All rights reserved. Powered by Solana & AI.
        </p>
        <p className="text-sm text-gray-500">
          Wallet: Fro4991MZF5ka11jBumRZZWtk4S8svrmbuNe46BVpYJA
        </p>
      </footer>
    </div>
  )
}

export default App

