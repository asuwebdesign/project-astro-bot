'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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
  Cog,
} from "lucide-react"
import { NavLink } from './nav-link'

export function NavigationUtility() {
  const pathname = usePathname()

  const navHeadingDefaultClasses = 'flex items-center justify-between w-full rounded-full hover:bg-zinc-700 hover:text-white'
  const navHeadingActiveClasses = 'flex items-center justify-between w-full rounded-full bg-zinc-800 hover:bg-zinc-700 hover:text-white'

  return (
    <nav className="grid items-start gap-4 mb-4 text-sm">
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant={pathname.startsWith('/administration') ? '' : 'ghost'} className={pathname.startsWith('/administration') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
            <div className="flex items-center gap-4">
              <Cog className="h-5 w-5" />
              <h4 className="text-sm font-heading font-medium">Administration</h4>
            </div>
            <ChevronsUpDown className="h-4 w-4 text-gray-500" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ol className="mt-2 ml-10">
            <NavLink label="Cluster settings" url="/builds" />
            <NavLink label="Custom resource definitions" url="/builds/image-streams" />
            <NavLink label="Limit ranges" url="/builds/image-streams" />
            <NavLink label="Namespaces" url="/builds/build-configs" />
            <NavLink label="Resource quotas" url="/builds/image-streams" />            
          </ol>
        </CollapsibleContent>
      </Collapsible>
      
      <Link href="/operators" className="">
        <Button variant="ghost" className="flex items-center justify-between w-full pr-2 rounded-full hover:bg-zinc-700 hover:text-white">
          <div className="flex items-center gap-4">
            <Plug2 className="h-5 w-5" />
            <h4 className="text-sm font-heading font-medium">Operators</h4>
          </div>
          <Badge className="bg-zinc-700">12</Badge>
        </Button>
      </Link>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant={pathname.startsWith('/user-management') ? '' : 'ghost'} className={pathname.startsWith('/user-management') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
            <div className="flex items-center gap-4">
              <Users className="h-5 w-5" />
              <h4 className="text-sm font-heading font-medium">User management</h4>
            </div>
            <ChevronsUpDown className="h-4 w-4 text-gray-500" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ol className="mt-2 ml-10">
            <NavLink label="Users" url="/builds" />
            <NavLink label="Groups" url="/builds/build-configs" />
            <NavLink label="Service accounts" url="/builds/image-streams" />
            <NavLink label="Roles" url="/builds/image-streams" />
            <NavLink label="Role bindings" url="/builds/image-streams" />
          </ol>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  )
}