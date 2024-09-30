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
import { CircleCheck, Cpu } from "lucide-react"

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