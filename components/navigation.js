'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

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
} from "lucide-react"
import { NavLink } from './nav-link'

export function Navigation() {
  const pathname = usePathname()

  const navHeadingDefaultClasses = 'flex items-center justify-between w-full rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:text-white hover:text-black dark:hover:text-white'
  const navHeadingActiveClasses = 'flex items-center justify-between w-full rounded-full bg-zinc-800 hover:bg-zinc-700 hover:text-white dark:text-white'

  return (
    <nav className="grid items-start gap-4 px-2 mb-4 text-sm lg:px-4">
      <Link href="/dashboard" className="">
        <Button variant={pathname.startsWith('/dashboard') ? '' : 'ghost'} className={pathname.startsWith('/dashboard') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
          <div className="flex items-center gap-4">
            <Home className="h-5 w-5" />
            <h4 className="text-sm font-heading font-medium">Dashboard</h4>
          </div>
        </Button>
      </Link>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant={pathname.startsWith('/builds') ? '' : 'ghost'} className={pathname.startsWith('/builds') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
            <div className="flex items-center gap-4">
              <Blocks className="h-5 w-5" />
              <h4 className="text-sm font-heading font-medium">Builds</h4>
            </div>
            <ChevronsUpDown className="h-4 w-4 text-gray-500" />
          </Button>
        </CollapsibleTrigger>
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
            <Button variant={pathname.startsWith('/compute') ? '' : 'ghost'} className={pathname.startsWith('/compute') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
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
          <hr className="ml-10 my-2 border-zinc-300 dark:border-zinc-700" />
          <ol className="mt-2 ml-10">
            <NavLink label="Machine configs" url="/compute/machine-configs" />
            <NavLink label="Machine config pools" url="/compute/machine-config-pools" />
          </ol>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible>
        <div className="">
          <CollapsibleTrigger asChild>
            <Button variant={pathname.startsWith('/networking') ? '' : 'ghost'} className={pathname.startsWith('/networking') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
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
            <Button variant={pathname.startsWith('/pipelines') ? '' : 'ghost'} className={pathname.startsWith('/pipelines') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
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
            <Button variant={pathname.startsWith('/observe') ? '' : 'ghost'} className={pathname.startsWith('/observe') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
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
            <Button variant={pathname.startsWith('/storage') ? '' : 'ghost'} className={pathname.startsWith('/storage') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
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
            <Button variant={pathname.startsWith('/workloads') ? '' : 'ghost'} className={pathname.startsWith('/workloads') ? navHeadingActiveClasses : navHeadingDefaultClasses}>
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
          <hr className="ml-10 my-2 border-zinc-300 dark:border-zinc-700" />
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
  )
}