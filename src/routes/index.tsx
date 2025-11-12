import { getPunkSongs } from '@/data/demo.punk-songs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    const songs = await getPunkSongs()
    console.log({ songs })
    return { songs }
  },
})

function App() {
  const { songs } = Route.useLoaderData()

  return (
    <div className="flex flex-col">
      <h2>Index</h2>
      <div>
        <h1>Punk Songs</h1>
        <ul>
          {songs.map((song) => (
            <li key={song.id}>{song.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// function PunkSongs() {
//   const data = useSuspenseQuery(songsQuery)
//   return (
//     <div>
//       <h1>Punk Songs</h1>
//       <ul>
//         {data.data.map((song) => (
//           <li key={song.id}>{song.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
