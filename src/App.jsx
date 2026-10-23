import Gallery from './components/Gallery'

function App() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-slate-900 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">
          Celebrare Photo Gallery
        </h1>
        <Gallery />
      </div>
    </main>
  )
}

export default App
