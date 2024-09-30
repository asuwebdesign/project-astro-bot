'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLink({ label, url }) {
  const pathname = usePathname()
 
  return (
    <li>
      {pathname === url ? (
        <Link href={url} className="relative flex items-center gap-3 rounded-lg px-3 py-2 font-heading font-medium text-white transition-all hover:text-white">
          {label}
          <div className="absolute top-1/2 left-[-12px] w-1.5 h-1.5 bg-white rounded-full translate-x-[-50%] translate-y-[-50%]" />
        </Link>
      ) : (
        <Link href={url} className="flex items-center gap-3 rounded-lg px-3 py-2 font-heading font-medium text-zinc-400 transition-all hover:text-white">{label}</Link>
      )}
    </li>
  )
}