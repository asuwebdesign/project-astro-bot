import { Red_Hat_Display, Red_Hat_Text, Red_Hat_Mono } from 'next/font/google'
import "./globals.css"

export const metadata = {
  title: "OpenShift Next",
  description: "Proof of concept reimagination of Red Hat OpenShift",
}

import Link from "next/link"
import {
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  ChevronsUpDown,
  Network,
  Database,
  Blocks,
  GitCompare,
  Telescope,
  Cpu,
  Circle,
  Plug2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import ProjectSelector from "@/components/project-selector"
import ToggleEvents from "@/components/toggle-events"
import ToggleNotifications from "@/components/toggle-notifications"
import ToggleLightspeed from "@/components/toggle-lightspeed"
import ToggleAccount from "@/components/toggle-account"
import { Navigation } from '@/components/navigation'
import { NavLink } from '@/components/nav-link'
import { NavigationUtility } from '@/components/navigation-utility'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-text antialiased`}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden bg-zinc-900 text-white md:block">
            <div className="flex h-full max-h-screen flex-col gap-4">
              <div className="flex h-14 items-center px-4 lg:h-[60px] px-2 w-full">
                <Link href="/" className="w-full">
                  <Button variant="ghost" className="flex items-center justify-start gap-4 w-full rounded-full font-heading text-md hover:bg-zinc-700 hover:text-white">
                    <Circle className="h-5 w-5 stroke-red-500" />
                    <div>
                      <span className="font-semibold">Red Hat</span> <span className="">OpenShift</span>
                    </div>
                  </Button>
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto">
                <Navigation />
              </div>

              <div className="lg:p-4">
                <hr className="my-4 border-zinc-700" />
                <NavigationUtility />
              </div>

            </div>
          </div>

          <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px]">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Package2 className="h-6 w-6" />
                      <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        6
                      </Badge>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <Users className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Analytics
                    </Link>
                  </nav>
                  <div className="mt-auto">

                  </div>
                </SheetContent>
              </Sheet>

              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-auto h-10 w-10 rounded-full">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle notifications</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="rounded-full">
                    <p>Menu</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search cluster..." className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 rounded-full" />
                  </div>
                </form>
              </div>

              <ProjectSelector />

              <div className="flex gap-2">
                <ToggleEvents />
                <ToggleNotifications />
                <ToggleLightspeed />
              </div>

              <ToggleAccount />

            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
