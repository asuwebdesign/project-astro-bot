'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-zinc-950 z-50 lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">

      <div className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-luminosity -z-10">
        <video
          className="object-cover w-full h-full"
          src="/assets/bg-auth.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="grid grid-cols-12 gap-16 w-screen h-screen p-16">

        <div className="col-span-4 flex items-center justify-center h-full p-16 bg-zinc-900/50 backdrop-blur-3xl text-white rounded-3xl overflow-hidden z-50">
          <div className="absolute top-16 left-16 flex items-center justify-center" style={{ width: 104, height: 104 }}>
            <Image className="" src="/assets/openshift-logo.svg" width={64} height={64} alt="OpenShift logo" />
          </div>
          <div className="relative grid gap-6 w-full z-10">
            <div className="grid gap-2 mb-16">
              <h1 className="text-4xl font-heading font-bold">Sign In</h1>
              <p className="text-balance text-muted-foreground">Enter your email below to login to your account</p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2 mb-4">
                <Label htmlFor="email">Red Hat ID</Label>
                <Input id="email" type="email" placeholder="m@example.com" required className="p-8 border-none bg-zinc-800" />
              </div>
              <div className="grid gap-2 mb-16">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="ml-auto inline-block text-sm font-medium text-blue-500 hover:text-blue-400">Forgot your password? </Link>
                </div>
                <Input id="password" type="password" required className="p-8 border-none bg-zinc-800" />
              </div>
              <Link href="/dashboard" className="rounded-full">
                <Button type="submit" className="w-full p-8 rounded-full font-heading font-bold">Sign In</Button>
              </Link>
              <div className="flex items-center justify-center gap-2 text-center text-sm text-zinc-300">
                <hr className="w-full" />
                <span className="w-full">Or authorize with</span>
                <hr className="w-full" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="w-full p-8 rounded-full font-heading">Sign In with Google</Button>
                <Button variant="outline" className="w-full p-8 rounded-full font-heading">Sign In with GitHub</Button>
              </div>
            </div>
            {/* <div className="mt-4 text-center text-sm">Don&apos;t have an account?{" "} <Link href="#" className="underline">Sign up</Link></div> */}
          </div>
          <Image className="absolute right-16 top-16 z-0" src="/assets/dot-grid.svg" width={104} height={104} alt="Dot grid" style={{ WebkitUserDrag: 'none' }} />
          <Image className="absolute left-0 bottom-0 z-0" src="/assets/illustration--sign-in--dark.svg" width={1920} height={1080} alt="Illustration shapes" style={{ WebkitUserDrag: 'none' }} />
        </div>

        <div className="col-span-6 flex flex-col gap-16 p-16 text-white">
          <div className="relative z-30 mt-auto text-white border-l-4 border-red-600 pl-8">
            <div className="font-heading font-semibold text-lg">Red Hat OpenShift</div>
            <div className="font-heading font-semibold text-4xl tracking-tight mt-1">Accelerate innovation and simplify hybrid cloud management</div>
            <p className="mt-4 font-heading text-lg">Experience a trusted, comprehensive, and consistent platform to develop, modernize, and deploy applications at scale, including today’s AI-enabled apps. Innovate faster with a complete set of services for bringing apps to market on your choice of infrastructure.</p>
          </div>
          <div className="flex items-center gap-12">
            <Image className="" src="/assets/redhat-logo-inverted.svg" width={136} height={32} alt="Red Hat logo" />
            <ul className="flex items-center gap-6">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of use</a></li>
              <li><a href="#">Trademarks</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
            <div className="text-zinc-400">&copy; 2024 Red Hat, Inc.</div>
          </div>
        </div>

      </div>

      {/* <div className="absolute top-16 left-16 w-[768px] bg-zinc-900/50 backdrop-blur-3xl text-white rounded-3xl p-6 flex items-center justify-center py-12 z-50" style={{ height: 'calc(100% - 128px' }}>
        <div className="relative mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-heading font-bold">Sign In</h1>
            <p className="text-balance text-muted-foreground">Enter your email below to login to your account</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="ml-auto inline-block text-sm underline" >Forgot your password? </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href="/dashboard">
              <Button type="submit" className="w-full rounded-full">Sign In</Button>
            </Link>
            <Button variant="outline" className="w-full rounded-full">Sign In with Google</Button>
          </div>
          <div className="mt-4 text-center text-sm">Don&apos;t have an account?{" "} <Link href="#" className="underline">Sign up</Link></div>
        </div>
      </div> */}

      {/* <div className="absolute right-16 bottom-16 w-3/5 flex flex-col p-32 text-white dark:border-r">
        <div className="relative z-30 mt-auto text-white border-l-4 border-red-600 pl-8">
          <div className="font-heading font-bold text-base">Red Hat OpenShift</div>
          <div className="font-heading font-semibold text-3xl tracking-tight mt-1">Redefine development and unlock your potential</div>
          <p className="mt-4">Elevate your development game with Red Hat Developer Intelligence and witness how this game-changing product unlocks new levels of efficiency, collaboration, and excellence in software development. Embrace the future of coding with confidence, precision, and intelligence at your fingertips.</p>
        </div>
      </div> */}

    </div>
  )
}
