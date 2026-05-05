"use server"

export async function getDashboardItems() {
  return [
    {
      name: "Total Servers",
      value: 10,
      accent: "zinc-400"
    },
    {
      name: "Online Servers",
      value: 100,
      accent: "green-400"
    },
    {
      name: "Offline Servers",
      value: 10,
      accent: "red-400"
    }
  ]
}
