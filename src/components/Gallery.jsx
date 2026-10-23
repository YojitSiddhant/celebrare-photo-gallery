import useFetchPhotos from '../hooks/useFetchPhotos'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12" role="status">
        <span className="size-8 animate-spin rounded-full border-4 border-slate-200 border-t-slate-700" />
        <span className="sr-only">Loading photos</span>
      </div>
    )
  }

  if (error) {
    return (
      <p className="rounded-lg bg-red-50 px-4 py-3 text-center text-red-700" role="alert">
        Unable to load photos: {error}
      </p>
    )
  }

  if (photos.length === 0) {
    return <p className="py-12 text-center text-slate-600">No photos found.</p>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {photos.map((photo) => (
        <article key={photo.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <img
            className="aspect-square w-full object-cover"
            src={photo.download_url}
            alt={`Photograph by ${photo.author}`}
          />
          <p className="px-4 py-3 text-sm font-medium text-slate-700">{photo.author}</p>
        </article>
      ))}
    </div>
  )
}

export default Gallery
