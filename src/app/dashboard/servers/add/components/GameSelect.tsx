import Image, { StaticImageData } from "next/image"


import { Input } from "@/components/Input"

export function GameSelect({ games }: {
  games: {
    image: StaticImageData
    name: string
    id: string
  }[]
}) {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <Input placeholder="Search..." />

      <div className="bg-zinc-900 p-4 flex gap-8">
        {games.map((val) => {
          return (
            <div className="h-48 aspect-2/3 relative" key={val.id}>
              <Image
                src={val.image}
                alt={val.name}
                fill
                className="object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

