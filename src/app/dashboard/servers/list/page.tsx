import MinecraftImage from "@/img/games/minecraft.jpg"
import ServerCard from "./components/ServerCard"

export default function ServerList() {
  const servers = [
    {
      id: 1,
      name: "Minecraft Survival",
      status: "Active",
      online: true,
      playersOnline: 10,
      maxPlayers: 100,
      image: MinecraftImage,
      game: "Minecraft",
    },
    {
      id: 2,
      name: "Minecraft Creative",
      status: "Offline",
      online: false,
      playersOnline: 0,
      maxPlayers: 50,
      image: MinecraftImage,
      game: "Minecraft",
    },
  ]

  return (
    <main className="p-8 bg-black min-h-screen w-full">
      <div className="flex flex-col gap-6">
        {servers.map((server) => (
          <ServerCard
            key={server.id}
            name={server.name}
            status={server.status}
            online={server.online}
            playersOnline={server.playersOnline}
            maxPlayers={server.maxPlayers}
            image={server.image}
            game={server.game}
          />
        ))}
      </div>
    </main>
  )
}

