'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Blocks, Calendar, Ellipsis, ListFilter, Plus, Search, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { DatatypeHeader } from "@/components/datatype-header"
import data from './data.json'
import Link from "next/link"
import ResourceChip from "@/components/resource-chip"
import { Checkbox } from "@/components/ui/checkbox"

export default function Page() {

  const info = <>
    <ul className="mb-2 flex flex-col gap-2 text-sm">
      <li><strong className="font-medium">Image streams</strong> are a powerful abstraction used to manage and track container images.</li>
      <li>They provide a mechanism to handle images from various sources (internal or external registries) and allow for automatic updates to running applications when the image changes.</li>
      <li>Essentially, an Image Stream acts as a pointer to an image or a collection of images, enabling version control and easier integration with build and deployment pipelines.</li>
    </ul>
  </>

  return (
    <>
      <DatatypeHeader icon={<Blocks className="w-6 h-6" />} title="Image streams" count="10" info={info} buttonLabel="Image stream" />

      <div className="grid grid-cols-4 gap-6">
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

      <div className="flex flex-1">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[48px]"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Labels</TableHead>
              <TableHead>Created</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <ResourceChip type="primary" icon={<Blocks className="w-5 h-5" />} badge="IS" label={item.name} meta="Image stream" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {/* <Badge className="font-medium" variant="secondary">NS</Badge>frontend-dev */}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" /> {item.created}
                  </div>
                </TableCell>
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