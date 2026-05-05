import Image from "next/image"

import MinecraftImage from "@/img/games/minecraft.jpg"
import CounterStrike2Image from "@/img/games/cs2.jpg"
import CounterStrikeGlobalOffensiveImage from "@/img/games/csgo.jpg"
import FactorioImage from "@/img/games/factorio.jpg"
import { Input } from "@/components/Input"

export function GameSelect() {
  const games = [
    {
      id: "minecraft",
      name: "Minecraft",
      image: MinecraftImage,
    },
    {
      id: "cs2",
      name: "Counter Strike 2",
      image: CounterStrike2Image,
    },
    {
      id: "csgo",
      name: "Counter Strike: Global Offensive",
      image: CounterStrikeGlobalOffensiveImage
    },
    {
      id: "factorio",
      name: "Factorio",
      image: FactorioImage
    }
  ]

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

