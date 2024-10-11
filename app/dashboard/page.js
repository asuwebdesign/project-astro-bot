'use client'

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
  Code,
  CirclePlus,
  Plug2,
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

export default function Page() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-heading font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        <Link href="/settings">Dashboard stuff</Link>
      </div>
    </>
  )
}