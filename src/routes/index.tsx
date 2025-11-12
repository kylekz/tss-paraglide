import { songsQuery } from '@/data/demo.punk-songs'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex flex-col">
      <h2>Index</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <PunkSongs />
      </Suspense>
    </div>
  )
}

function PunkSongs() {
  const data = useSuspenseQuery(songsQuery)
  return (
    <div>
      <h1>Punk Songs</h1>
      <ul>
        {data.data.map((song) => (
          <li key={song.id}>{song.name}</li>
        ))}
      </ul>
    </div>
  )
}
