import { DatatypeHeader } from "@/components/datatype-header"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CircleCheck, Cpu, Ellipsis } from "lucide-react"
import data from './data.json'
import { Button } from "@/components/ui/button"

export default function Page() {

  const info = ''

  return (
    <>
      <DatatypeHeader icon={<Cpu className="w-6 h-6" />} title="Nodes" count="10" info={info} buttonLabel="Node" />
      <div className="flex flex-1">

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Pods</TableHead>
              <TableHead>Memory</TableHead>
              <TableHead>CPU</TableHead>
              <TableHead>Filesystem</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Instance type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-2 font-medium">
                    <Badge className=" font-medium">BC</Badge>{item.name}
                  </div>
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
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2 font-medium">
                  <Badge className="bg-violet-600 font-medium">N</Badge>ip-10-0-10-1.us-west-1.compute.internal
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <CircleCheck className="w-4 h-4" /> Ready
                </div>
              </TableCell>
              <TableCell>worker</TableCell>
              <TableCell>45</TableCell>
              <TableCell>5.6 GiB / 15.36 GiB</TableCell>
              <TableCell>0.431 cores / 4 cores</TableCell>
              <TableCell>25.86 GiB / 119.8 GiB</TableCell>
              <TableCell>Sep 26, 2024 8:39am</TableCell>
              <TableCell>m6i.xlarge</TableCell>
            </TableRow>

          </TableBody>
        </Table>

      </div>
    </>
  )
}