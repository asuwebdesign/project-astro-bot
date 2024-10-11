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
import { Cpu, Ellipsis, Info, ListFilter, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DatatypeHeader } from "@/components/datatype-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import data from './data.json'
import ResourceChip from "@/components/resource-chip"

export default function Page() {

  const info = ''

  return (
    <>
      <DatatypeHeader icon={<Cpu className="w-6 h-6" />} title="Machine autoscalers" count="10" info={info} buttonLabel="Machine autoscaler" />

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
              <TableHead>Scale Target</TableHead>
              <TableHead>Min Replicas</TableHead>
              <TableHead>Max Replicas</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <ResourceChip type="primary" icon={<Cpu className="w-5 h-5" />} badge="MA" label={item.name} meta="Machine autoscaler" />
                </TableCell>
                <TableCell>
                  <ResourceChip type="secondary" badge="MS" label={item.scale_target} />
                </TableCell>
                <TableCell>{item.min_replicas}</TableCell>
                <TableCell>{item.max_replicas}</TableCell>
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