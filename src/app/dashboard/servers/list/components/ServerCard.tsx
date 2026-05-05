import Image from "next/image"

export interface ServerCardProps {
  name: string
  status: string
  online: boolean
  playersOnline: number
  maxPlayers: number
  image: any // Change to StaticImageData if you're using Next.js static import
  game: string
}

export default function ServerCard({
  name,
  status,
  online,
  playersOnline,
  maxPlayers,
  image,
  game,
}: ServerCardProps) {
  return (
    <div
      className="group relative bg-zinc-900 border border-zinc-800 flex justify-between items-stretch overflow-hidden flex-1 min-w-[350px]"
    >
      <div className="relative z-20 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div
              className={`${online ? "bg-green-400 animate-pulse" : "bg-gray-500"} h-2 w-2 rounded-full`}
              title={online ? "Online" : "Offline"}
            ></div>
            <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Status: {status}</span>
          </div>
          <h3 className="font-black text-3xl text-white uppercase tracking-tighter italic">
            {name}
          </h3>
        </div>

        <div className="mt-8">
          <p className="text-zinc-500 text-xs uppercase font-bold">Players Online</p>
          <p className="text-4xl font-mono text-white">
            {playersOnline}
            <span className="text-zinc-700">/{maxPlayers}</span>
          </p>
        </div>
      </div>

      <div className="relative w-48 shrink-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-900 via-zinc-900/40 to-transparent"></div>
        <Image
          src={image}
          alt={game}
          fill
          className="object-cover grayscale duration-500"
        />
      </div>
    </div>
  )
}
