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

  const navHeadingDefaultClasses = 'flex items-center justify-between w-full rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:text-white hover:text-black dark:hover:text-white'
  const navHeadingActiveClasses = 'flex items-center justify-between w-full rounded-full bg-zinc-800 hover:bg-zinc-700 text-white hover:text-white dark:text-white'

  return (
    <nav className="grid items-start gap-4 mb-4 text-sm">
      {/* <Collapsible>
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
            <NavLink label="Cluster settings" url="/administration/cluster-settings" />
            <NavLink label="Custom resource definitions" url="/administration/custom-resource-definitions" />
            <NavLink label="Limit ranges" url="/administration/limit-ranges" />
            <NavLink label="Namespaces" url="/administration/namespaces" />
            <NavLink label="Resource quotas" url="/administration/resource-quotas" />            
          </ol>
        </CollapsibleContent>
      </Collapsible> */}

      <Link href="/administration" className="">
        <Button variant="ghost" className={pathname.startsWith('/administration') ? navHeadingActiveClasses + ' pr-2' : navHeadingDefaultClasses + ' pr-2'}>
          <div className="flex items-center gap-4">
            <Cog className="h-5 w-5" />
            <h4 className="text-sm font-heading font-medium">Administration</h4>
          </div>
        </Button>
      </Link>
      
      <Link href="/operators" className="">
        <Button variant="ghost" className={pathname.startsWith('/operators') ? navHeadingActiveClasses + ' pr-2' : navHeadingDefaultClasses + ' pr-2'}>
          <div className="flex items-center gap-4">
            <Plug2 className="h-5 w-5" />
            <h4 className="text-sm font-heading font-medium">Operators</h4>
          </div>
          <Badge className="bg-zinc-700 text-white dark:bg-zinc-400 dark:text-black">12</Badge>
        </Button>
      </Link>

      <Link href="/user-management" className="">
        <Button variant="ghost" className={pathname.startsWith('/user-management') ? navHeadingActiveClasses + ' pr-2' : navHeadingDefaultClasses + ' pr-2'}>
          <div className="flex items-center gap-4">
            <Users className="h-5 w-5" />
            <h4 className="text-sm font-heading font-medium">User management</h4>
          </div>
        </Button>
      </Link>

      {/* <Collapsible>
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
            <NavLink label="Users" url="/user-management/users" />
            <NavLink label="Groups" url="/user-management/groups" />
            <NavLink label="Service accounts" url="/user-management/service-accounts" />
            <NavLink label="Roles" url="/user-management/roles" />
            <NavLink label="Role bindings" url="/user-management/role-bindings" />
          </ol>
        </CollapsibleContent>
      </Collapsible> */}
    </nav>
  )
}