'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CircleCheck, Cpu, Ellipsis, Info, ListFilter, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DatatypeHeader } from "@/components/datatype-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import data from './data.json'
import ResourceChip from "@/components/resource-chip"

export default function Page() {

  const info = <>
    <ul className="mb-2 flex flex-col gap-2 text-sm">
      <li>Machines are part of the infrastructure layer that represents physical or virtual servers in a cluster, managed by the Machine API.</li>
      <li>They abstract the underlying compute resources (such as virtual machines in cloud providers) and automate the creation, scaling, and management of nodes within the OpenShift cluster.</li>
    </ul>
  </>

  return (
    <>
      <DatatypeHeader icon={<Cpu className="w-6 h-6" />} title="Machines" count="10" info={info} buttonLabel="Machine" />

      <div className="grid grid-cols-4 gap-6 2xl:w-4/6 mx-auto my-0">
        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>

        <Card x-chunk="dashboard-05-chunk-1">
          <CardHeader className="pb-2">
            <CardDescription>This Week</CardDescription>
            <CardTitle className="text-4xl">1,329</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +25% from last week
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-1 2xl:w-4/6 mx-auto my-0">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Node</TableHead>
              <TableHead>Phase</TableHead>
              <TableHead>Provider State</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Availability Zone</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <ResourceChip type="primary" icon={<Cpu className="w-5 h-5" />} badge="M" label={item.name} meta="Machine" />
                </TableCell>
                <TableCell>
                  <ResourceChip type="secondary" icon={<Cpu className="w-5 h-5" />} badge="NS" label={item.node} meta="Node" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <CircleCheck className="w-5 h-5" />
                    {item.phase}
                  </div>
                </TableCell>
                <TableCell>{item.provider_state}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.availability_zone}</TableCell>
                <TableCell>
                  <Button variant="ghost" className="rounded-full"><Ellipsis className="w-5 h-5" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </>
  )
}