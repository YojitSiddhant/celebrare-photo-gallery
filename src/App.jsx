import Gallery from './components/Gallery'

function App() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">
          Celebrare Photo Gallery
        </h1>
        <Gallery />
      </div>
    </main>
  )
}

export default App
