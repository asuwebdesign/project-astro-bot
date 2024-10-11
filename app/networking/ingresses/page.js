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
import { Cpu, Ellipsis, Network } from "lucide-react"
import data from './data.json'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ResourceChip from "@/components/resource-chip"

export default function Page() {

  const info = ''

  return (
    <>
      <DatatypeHeader icon={<Network className="w-6 h-6" />} title="Ingresses" count="10" info={info} buttonLabel="Ingress" />
      <div className="flex flex-1">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Namespace</TableHead>
              <TableHead>Labels</TableHead>
              <TableHead>Hosts</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <ResourceChip type="primary" icon={<Network className="w-5 h-5" />} badge="I" label={item.name} meta="Ingress" />
                </TableCell>
                <TableCell></TableCell>
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