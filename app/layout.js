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
import { NavLink } from '@/components/nav-link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-text antialiased`}>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden  bg-muted/70 md:block">
            <div className="flex h-full max-h-screen flex-col gap-4">
              <div className="flex h-14 items-center px-4 lg:h-[60px] px-2 w-full">
                <Link href="/" className="w-full">
                  <Button variant="ghost" className="flex items-center justify-start gap-4 w-full rounded-full font-heading text-md hover:bg-gray-200">
                    <Circle className="h-5 w-5" />
                    <div>
                      <span className="font-semibold">Red Hat</span> <span className="">OpenShift</span>
                    </div>
                  </Button>
                </Link>
              </div>
              <div className="flex-1 overflow-y-auto">
                <nav className="grid items-start gap-4 px-2 mb-4 text-sm lg:px-4">
                  <Link href="/dashboard" className="">
                    <Button className="flex items-center justify-between w-full rounded-full">
                      <div className="flex items-center gap-4">
                        <Home className="h-5 w-5" />
                        <h4 className="text-sm font-heading font-medium">Dashboard</h4>
                      </div>
                    </Button>
                  </Link>

                  <Collapsible>
                    <div className="">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-between w-full rounded-full hover:bg-gray-200">
                          <div className="flex items-center gap-4">
                            <Blocks className="h-5 w-5" />
                            <h4 className="text-sm font-heading font-medium">Builds</h4>
                          </div>
                          <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ol className="mt-2 ml-10">
                        <NavLink label="Overview" url="/builds" />
                        <NavLink label="Build configs" url="/builds/build-configs" />
                        <NavLink label="Image streams" url="/builds/image-streams" />
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <div className="">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-between w-full rounded-full hover:bg-gray-200">
                          <div className="flex items-center gap-4">
                            <Cpu className="h-5 w-5" />
                            <h4 className="text-sm font-heading font-medium">Compute</h4>
                          </div>
                          <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ol className="mt-2 ml-10">
                        <NavLink label="Overview" url="/compute" />
                        <NavLink label="Machines" url="/compute/machines" />
                        <NavLink label="Machine autoscalers" url="/compute/machine-autoscalers" />
                        <NavLink label="Machine health checks" url="/compute/machine-health-checks" />
                        <NavLink label="Machine sets" url="/compute/machine-sets" />
                        <NavLink label="Nodes" url="/compute/nodes" />
                      </ol>
                      <hr className="ml-10 my-2" />
                      <ol className="mt-2 ml-10">
                        <NavLink label="Machine configs" url="/compute/machine-configs" />
                        <NavLink label="Machine config pools" url="/compute/machine-config-pools" />
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <div className="">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-between w-full rounded-full hover:bg-gray-200">
                          <div className="flex items-center gap-4">
                            <Network className="h-5 w-5" />
                            <h4 className="text-sm font-heading font-medium">Networking</h4>
                          </div>
                          <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ol className="mt-2 ml-10">
                        <NavLink label="Overview" url="/networking" />
                        <NavLink label="Ingresses" url="/networking/ingresses" />
                        <NavLink label="Network policies" url="/networking/network-policies" />
                        <NavLink label="Routes" url="/networking/routes" />
                        <NavLink label="Services" url="/networking/services" />
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <div className="">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-between w-full rounded-full hover:bg-gray-200">
                          <div className="flex items-center gap-4">
                            <GitCompare className="h-5 w-5" />
                            <h4 className="text-sm font-heading font-medium">Pipelines</h4>
                          </div>
                          <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ol className="mt-2 ml-10">
                        <NavLink label="Overview" url="/pipelines" />
                        <NavLink label="Tasks" url="/pipelines/tasks" />
                        <NavLink label="Triggers" url="/pipelines/triggers" />
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <div className="">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-between w-full rounded-full hover:bg-gray-200">
                          <div className="flex items-center gap-4">
                            <Telescope className="h-5 w-5" />
                            <h4 className="text-sm font-heading font-medium">Observe</h4>
                          </div>
                          <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ol className="mt-2 ml-10">
                        <NavLink label="Overview" url="/observe" />
                        <NavLink label="Alerting" url="/observe/alerting" />
                        <NavLink label="Dashboards" url="/observe/dashboards" />
                        <NavLink label="Metrics" url="/observe/metrics" />
                        <NavLink label="Targets" url="/observe/targets" />
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <div className="">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-between w-full rounded-full hover:bg-gray-200">
                          <div className="flex items-center gap-4">
                            <Database className="h-5 w-5" />
                            <h4 className="text-sm font-heading font-medium">Storage</h4>
                          </div>
                          <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ol className="mt-2 ml-10">
                        <NavLink label="Overview" url="/storage" />
                        <NavLink label="Persistent volumes" url="/storage/persistent-volumes" />
                        <NavLink label="Persistent volume claims" url="/storage/persistent-volume-claims" />
                        <NavLink label="Storage classes" url="/storage/storage-classes" />
                        <NavLink label="Volume snapshots" url="/storage/volume-snapshots" />
                        <NavLink label="Volume snapshot classes" url="/storage/volume-snapshot-classes" />
                        <NavLink label="Volume snapshot contents" url="/storage/volume-snapshot-contents" />
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <div className="">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-between w-full rounded-full hover:bg-gray-200">
                          <div className="flex items-center gap-4">
                            <Package className="h-5 w-5" />
                            <h4 className="text-sm font-heading font-medium">Workloads</h4>
                          </div>
                          <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                      <ol className="mt-2 ml-10">
                        <NavLink label="Overview" url="/workloads" />
                        <NavLink label="Config maps" url="/workloads/config-maps" />
                        <NavLink label="Deployments" url="/workloads/deployments" />
                        <NavLink label="Pods" url="/workloads/pods" />
                        <NavLink label="Secrets" url="/workloads/secrets" />
                        <NavLink label="Stateful sets" url="/workloads/stateful-sets" />
                      </ol>
                      <hr className="ml-10 my-2" />
                      <ol className="ml-10">
                        <NavLink label="Cron jobs" url="/workloads/cron-jobs" />
                        <NavLink label="Daemon sets" url="/workloads/daemon-sets" />
                        <NavLink label="Horizontal pod autoscalers" url="/workloads/horizontal-pod-autoscalers" />
                        <NavLink label="Jobs" url="/workloads/jobs" />
                        <NavLink label="Pod disruption budgets" url="/workloads/pod-disruption-budgets" />
                        <NavLink label="Replica sets" url="/workloads/replica-sets" />
                        <NavLink label="Replication controllers" url="/workloads/replication-controllers" />
                      </ol>
                    </CollapsibleContent>
                  </Collapsible>

                </nav>
              </div>

              <div className="lg:p-4">
                <hr className="my-2" />
                <Link href="/operators" className="">
                  <Button variant="ghost" className="flex items-center justify-between w-full rounded-full hover:bg-gray-200">
                    <div className="flex items-center gap-4">
                      <Plug2 className="h-5 w-5" />
                      <h4 className="text-sm font-heading font-medium">Operators</h4>
                    </div>
                    <Badge>12</Badge>
                  </Button>
                </Link>
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
