'use client'

import { OperatorCard } from "./operator-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export function Explore() {
  return (
    <div>
      <section className="mb-16">
        <h2 className="mb-4 font-heading font-medium text-lg">Featured</h2>
        <div className="grid grid-cols-3 gap-6 w-full">
          <OperatorCard
            thumbnail="https://cdn.dribbble.com/userupload/12029715/file/original-1cb819d3327bc5f1f29d3574a3e27a91.png?resize=2048x1536"
            appIcon="https://cdn.dribbble.com/userupload/15842246/file/original-0341ae3508b38ca3d42a46aa0967d18f.png?resize=1504x1128"
            title="Octane X Classic"
            description="Fast, unbiased GPU rendering"
          />
          <OperatorCard
            thumbnail="https://cdn.dribbble.com/userupload/4689321/file/original-2f03d4e30671b82dfe69f867a96a3891.jpg?resize=2048x1331"
            appIcon="https://cdn.dribbble.com/userupload/15842246/file/original-0341ae3508b38ca3d42a46aa0967d18f.png?resize=1504x1128"
            title="Octane X Classic"
            description="Fast, unbiased GPU rendering"
          />
          <OperatorCard
            thumbnail="https://cdn.dribbble.com/userupload/4805688/file/original-8072ff0ca9f4500667d4db4e619ec695.jpg?crop=480x0-1920x1080&resize=700x525&vertical=center"
            appIcon="https://cdn.dribbble.com/userupload/15842246/file/original-0341ae3508b38ca3d42a46aa0967d18f.png?resize=1504x1128"
            title="Octane X Classic"
            description="Fast, unbiased GPU rendering"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 font-heading font-medium text-lg">Popular / Recommended</h2>
        <div className="grid grid-cols-4 gap-6 w-full">
          <OperatorCard
            thumbnail="https://cdn.dribbble.com/userupload/4805688/file/original-8072ff0ca9f4500667d4db4e619ec695.jpg?crop=480x0-1920x1080&resize=700x525&vertical=center"
            appIcon="https://cdn.dribbble.com/userupload/15842246/file/original-0341ae3508b38ca3d42a46aa0967d18f.png?resize=1504x1128"
            title="Octane X Classic"
            description="Fast, unbiased GPU rendering"
          />
          <OperatorCard
            thumbnail="https://cdn.dribbble.com/userupload/4805688/file/original-8072ff0ca9f4500667d4db4e619ec695.jpg?crop=480x0-1920x1080&resize=700x525&vertical=center"
            appIcon="https://cdn.dribbble.com/userupload/15842246/file/original-0341ae3508b38ca3d42a46aa0967d18f.png?resize=1504x1128"
            title="Octane X Classic"
            description="Fast, unbiased GPU rendering"
          />
          <OperatorCard
            thumbnail="https://cdn.dribbble.com/userupload/4805688/file/original-8072ff0ca9f4500667d4db4e619ec695.jpg?crop=480x0-1920x1080&resize=700x525&vertical=center"
            appIcon="https://cdn.dribbble.com/userupload/15842246/file/original-0341ae3508b38ca3d42a46aa0967d18f.png?resize=1504x1128"
            title="Octane X Classic"
            description="Fast, unbiased GPU rendering"
          />
          <OperatorCard
            thumbnail="https://cdn.dribbble.com/userupload/4805688/file/original-8072ff0ca9f4500667d4db4e619ec695.jpg?crop=480x0-1920x1080&resize=700x525&vertical=center"
            appIcon="https://cdn.dribbble.com/userupload/15842246/file/original-0341ae3508b38ca3d42a46aa0967d18f.png?resize=1504x1128"
            title="Octane X Classic"
            description="Fast, unbiased GPU rendering"
          />
        </div>
      </section>

      {/* Multi column lists with Get buttons */}
      <section>
        <aside></aside>
        <div></div>
      </section>

      <p>Featured, popular, recommended, favorites</p>
      <p>Categories, source, provider, install state, capability level, infrastructure features, valid subscription</p>

      <div>Logo, source/tag, title, provider, description</div>
    </div>
  )
}