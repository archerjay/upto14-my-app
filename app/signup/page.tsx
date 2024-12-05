'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import OtpInput from 'react-otp-input'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [showOtp, setShowOtp] = useState(false)
  const router = useRouter()

  const handleEmailSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement email sign-up logic here
    console.log('Email sign-up:', email)
    setShowOtp(true)
  }

  const handleMobileSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement mobile sign-up logic here
    console.log('Mobile sign-up:', mobile)
    setShowOtp(true)
  }

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement OTP verification logic here
    console.log('OTP submitted:', otp)
    // If OTP is verified successfully, redirect to post-login page
    router.push('/dashboard')
  }

  const handleSocialSignUp = (provider: string) => {
    // Implement social sign-up logic here
    console.log(`${provider} sign-up`)
    // After successful sign-up, redirect to post-login page
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Join the Beta</h1>
        {!showOtp ? (
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <form onSubmit={handleEmailSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Sign Up with Email</Button>
              </form>
            </TabsContent>
            <TabsContent value="mobile">
              <form onSubmit={handleMobileSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Sign Up with Mobile</Button>
              </form>
            </TabsContent>
          </Tabs>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">Enter OTP</Label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="w-2"></span>}
                renderInput={(props) => <Input {...props} className="!w-10" />}
                inputStyle="!w-10"
              />
            </div>
            <Button type="submit" className="w-full">Verify OTP</Button>
          </form>
        )}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => handleSocialSignUp('Google')}
              className="w-full"
            >
              <FaGoogle className="mr-2 h-4 w-4" /> Google
            </Button>
            <Button
              variant="outline"
              onClick={() => handleSocialSignUp('Facebook')}
              className="w-full"
            >
              <FaFacebook className="mr-2 h-4 w-4" /> Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

