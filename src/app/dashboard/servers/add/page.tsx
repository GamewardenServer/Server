import { Heading } from "@/components/Heading"
import { Input } from "@/components/Input";
import Form from "next/form"
import { GameSelect } from "./components/GameSelect";


export default function Page() {
  return (
    <main className="p-8 w-full">
      <Heading>Create a new server</Heading>

      <Form action={async () => {
        "use server";
      }}>
        <GameSelect />
      </Form>
    </main>
  )
}
