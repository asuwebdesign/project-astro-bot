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
import { Cpu, Ellipsis } from "lucide-react"
import data from './data.json'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ResourceChip from "@/components/resource-chip"

export default function Page() {

  const info = ''

  return (
    <>
      <DatatypeHeader icon={<Cpu className="w-6 h-6" />} title="Machine config pools" count="10" info={info} buttonLabel="Machine config pool" />
      <div className="flex flex-1 2xl:w-4/6 mx-auto my-0">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Configuration</TableHead>
              <TableHead>Degraded</TableHead>
              <TableHead>Update status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <ResourceChip type="primary" icon={<Cpu className="w-5 h-5" />} badge="MCP" label={item.name} meta="Machine config pool" />
                </TableCell>
                <TableCell>
                  -
                </TableCell>
                <TableCell>{item.degraded}</TableCell>
                <TableCell>-</TableCell>
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