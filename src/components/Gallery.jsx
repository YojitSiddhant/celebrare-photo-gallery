import { useCallback, useMemo, useState } from 'react'
import PhotoCard from './PhotoCard'
import SearchBar from './SearchBar'
import useFetchPhotos from '../hooks/useFetchPhotos'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    if (!normalizedSearch) {
      return photos
    }

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(normalizedSearch),
    )
  }, [photos, searchTerm])

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
    <div>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      {filteredPhotos.length === 0 ? (
        <p className="py-12 text-center text-slate-600">No photos found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Gallery
