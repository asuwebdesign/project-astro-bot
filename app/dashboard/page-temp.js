import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Page() {
  return (
    <div className="grid grid-cols-[320px_1fr] grid-rows-[64px_1fr] h-screen">

      {/* Header toolbar */}
      <header className="flex items-center justify-between col-span-2 row-span-1 bg-gray-950 text-white">

        {/* Branding logo - MOVE TO NAV SIDEBAR? */}
        <div>Red Hat OpenShift</div>

        {/* Global search */}
        <div><input type="search" placeholder="Search cluster..." /></div>

        {/* Project selector */}
        <div>Project ABC</div>
        {/* <div>Dropdown for projects...</div> */}

        {/* Utilities toolbar */}
        <div>Notifications - 1</div>
        <div>Events</div>
        <div>AI chat</div>

        {/* User account */}
        {/* Include: about, language, appearance, etc. */}
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>John Smith</span>
        </div>
        {/* <nav>
          <ol>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Send feedback</a></li>
            <li><a href="#">Sign out</a></li>
          </ol>
        </nav> */}

      </header>

      {/* Primary navigation sidebar */}
      {/* Include menu groups... collapsible... */}
      <nav className="col-span-1 row-span-2 bg-gray-950 text-white">
        <ol>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Dashboard</a></li>
        </ol>
      </nav>

      {/* Core content for current page */}
      <main className="p-8 bg-gray-50">
        <h1>Dashboard</h1>
        <div>Core content goes here</div>
        <Button variant="outline">Click me</Button>
      </main>

    </div>
  )
}