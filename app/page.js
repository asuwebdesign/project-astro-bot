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
          <div className="relative grid gap-6 w-full">
            <div className="grid gap-2">
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
            <div className="mt-4 text-center text-sm">Don&apos;t have an account?{" "} <Link href="#" className="underline">Sign up</Link></div>
          </div>
          <Image className="absolute right-16 top-16" src="/assets/dot-grid.svg" width={104} height={104} alt="Dot grid" />
          <Image className="absolute left-0 bottom-0" src="/assets/illustration--sign-in--dark.svg" width={1920} height={1080} alt="Illustration shapes" />
        </div>

        <div className="col-span-6 flex flex-col p-16 text-white">
          <div className="relative z-30 mt-auto text-white border-l-4 border-red-600 pl-8">
            <div className="font-heading font-bold text-base">Red Hat OpenShift</div>
            <div className="font-heading font-semibold text-3xl tracking-tight mt-1">Redefine development and unlock your potential</div>
            <p className="mt-4">Elevate your development game with Red Hat Developer Intelligence and witness how this game-changing product unlocks new levels of efficiency, collaboration, and excellence in software development. Embrace the future of coding with confidence, precision, and intelligence at your fingertips.</p>
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
