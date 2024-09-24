import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  History,
  Sparkles,
  ChevronsUpDown,
  Network,
  Database,
  Blocks,
  GitCompare,
  Telescope,
  Cpu,
  Circle,
  LogOut,
  User,
  Settings,
  Keyboard,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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

export default function Page() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-4">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-heading font-semibold">
              <Circle className="h-6 w-6" />
              <span className="">Red Hat OpenShift</span>
            </Link>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="grid items-start gap-4 px-2 mb-4 text-sm lg:px-4">
              <Link href="/dashboard" className="">
                <Button size="sm" className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <Home className="h-5 w-5" />
                    <h4 className="text-sm font-heading font-medium">Dashboard</h4>
                  </div>
                </Button>                
              </Link>

              <Collapsible>
                <div className="">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Blocks className="h-5 w-5" />
                        <h4 className="text-sm font-heading font-medium">Builds</h4>
                      </div>
                      <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <ol className="mt-2 ml-9">
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Builds</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Build configs</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Image streams</Link></li>
                  </ol>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Cpu className="h-5 w-5" />
                        <h4 className="text-sm font-heading font-medium">Compute</h4>
                      </div>
                      <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <ol className="mt-2 ml-9">
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Machines</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Machine autoscalers</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Machine configs</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Machine config pools</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Machine health checks</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Machine sets</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Nodes</Link></li>
                  </ol>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Network className="h-5 w-5" />
                        <h4 className="text-sm font-heading font-medium">Networking</h4>
                      </div>
                      <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <ol className="mt-2 ml-9">
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Ingresses</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Network policies</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Routes</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Services</Link></li>
                  </ol>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <GitCompare className="h-5 w-5" />
                        <h4 className="text-sm font-heading font-medium">Pipelines</h4>
                      </div>
                      <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <ol className="mt-2 ml-9">
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Pipelines</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Tasks</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Triggers</Link></li>
                  </ol>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Telescope className="h-5 w-5" />
                        <h4 className="text-sm font-heading font-medium">Observe</h4>
                      </div>
                      <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <ol className="mt-2 ml-9">
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Alerting</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Dashboards</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Metrics</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Targets</Link></li>
                  </ol>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Database className="h-5 w-5" />
                        <h4 className="text-sm font-heading font-medium">Storage</h4>
                      </div>
                      <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <ol className="mt-2 ml-9">
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Persistent volumes</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Persistent volume claims</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Storage classes</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Volume snapshots</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Volume snapshot classes</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Volume snapshot contents</Link></li>
                  </ol>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <div className="">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4">
                        <Package className="h-5 w-5" />
                        <h4 className="text-sm font-heading font-medium">Workloads</h4>
                      </div>
                      <ChevronsUpDown className="h-4 w-4 text-gray-500" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  <ol className="mt-2 ml-9">
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Config maps</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Deployments</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Pods</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Secrets</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Stateful sets</Link></li>
                  </ol>
                  <hr className="my-2" />
                  <ol className="ml-7">
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Cron jobs</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Daemon sets</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Horizontal pod autoscalers</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Jobs</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Pod disruption budgets</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Replica sets</Link></li>
                    <li><Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">Replication controllers</Link></li>
                  </ol>
                </CollapsibleContent>
              </Collapsible>

            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-auto h-10 w-10 rounded-full">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Toggle notifications</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="rounded-full">
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-auto h-10 w-10 rounded-full">
                    <History className="h-5 w-5" />
                    <span className="sr-only">Toggle events</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="rounded-full">
                  <p>Events</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-auto h-10 w-10 rounded-full">
                    <Sparkles className="h-5 w-5" />
                    <span className="sr-only">Toggle AI chat</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="rounded-full">
                  <p>AI Chat</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mx-4 font-heading">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>New Team</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Users className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-heading font-semibold md:text-2xl">Settings</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">

          </div>
        </main>
      </div>
    </div>
  )
}