'use client'

import { DatatypeHeader } from "@/components/datatype-header"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Ellipsis, Network } from "lucide-react"
import data from './data.json'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ResourceChip from "@/components/resource-chip"

export default function Page() {

  const info = ''

  return (
    <>
      <DatatypeHeader icon={<Network className="w-6 h-6" />} title="Network policies" count="10" info={info} buttonLabel="Network policy" />
      <div className="flex flex-1">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Namespace</TableHead>
              <TableHead>Pod selector</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <ResourceChip type="primary" icon={<Network className="w-5 h-5" />} badge="NP" label={item.name} meta="Network policy" />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge className="font-medium" variant="secondary">NS</Badge>{item.namespace}
                  </div>
                </TableCell>
                <TableCell>{item.lastRun}</TableCell>
                <TableCell>{item.lastRunStatus}</TableCell>
                <TableCell>{item.lastRunTime}</TableCell>
                <TableCell>{item.lastRunDuration}</TableCell>
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