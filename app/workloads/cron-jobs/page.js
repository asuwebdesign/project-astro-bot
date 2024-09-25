import Link from "next/link"

export default function Page() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-heading font-semibold md:text-2xl">Cron jobs</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </>
  )
}