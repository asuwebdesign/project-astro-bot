'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLink({ label, url }) {
  const pathname = usePathname()
 
  return (
    <li>
      {pathname === url ? (
        <Link href={url} className="flex items-center gap-3 rounded-lg px-3 py-2 font-heading font-medium text-gray-950 transition-all hover:text-gray-950">{label}</Link>
      ) : (
        <Link href={url} className="flex items-center gap-3 rounded-lg px-3 py-2 font-heading font-medium text-gray-500 transition-all hover:text-gray-950">{label}</Link>
      )}
    </li>
  )
}