import { Heading } from "@/components/Heading"
import { Input } from "@/components/Input";
import Form from "next/form"

import MinecraftImage from "@/img/games/minecraft.jpg"
import CounterStrike2Image from "@/img/games/cs2.jpg"
import CounterStrikeGlobalOffensiveImage from "@/img/games/csgo.jpg"
import FactorioImage from "@/img/games/factorio.jpg"

import { GameSelect } from "./components/GameSelect";
import { Range } from "@/components/Range";
import { Select } from "@/components/Select";


export default function Page() {
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
    <main className="p-8 w-full">
      <Heading>Create a new server</Heading>

      <Form action={async () => {
        "use server";
      }}>
        <GameSelect games={games} />

        <Select>
          <option value="node-1">Node 1</option>
          <option value="node-2">Node 2</option>
        </Select>

        <h3>RAM size</h3>
        <Range min={256} max={2048} defaultValue={1024} className="w-full" />

        <button type="submit">Submit</button>
      </Form>
    </main>
  )
}
