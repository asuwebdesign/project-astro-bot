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
      <DatatypeHeader icon={<Cpu className="w-6 h-6" />} title="Machine sets" count="10" info={info} buttonLabel="Machine set" />
      <div className="flex flex-1 2xl:w-4/6 mx-auto my-0">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Namespace</TableHead>
              <TableHead>Machines</TableHead>
              <TableHead>Instance type</TableHead>
              <TableHead>CPU</TableHead>
              <TableHead>Memory</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <ResourceChip type="primary" badge="MS" label={item.name} icon={<Cpu className="w-5 h-5" />} meta="Machine set" />
                </TableCell>
                <TableCell>
                  <ResourceChip type="secondary" badge="NS" label={item.namespace} />
                </TableCell>
                <TableCell>{item.num_machines}</TableCell>
                <TableCell>{item.instance_type}</TableCell>
                <TableCell>{item.cpu_usage}</TableCell>
                <TableCell>{item.memory_usage}</TableCell>
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