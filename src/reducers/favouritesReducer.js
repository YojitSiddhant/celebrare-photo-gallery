export const FAVOURITES_STORAGE_KEY = 'celebrare-photo-gallery-favourites'

function normalizePhotoId(photoId) {
  if (
    (typeof photoId !== 'string' && typeof photoId !== 'number') ||
    (typeof photoId === 'string' && photoId.trim() === '') ||
    (typeof photoId === 'number' && !Number.isFinite(photoId))
  ) {
    return null
  }

  return String(photoId)
}

export function getInitialFavourites() {
  try {
    const storedFavourites = localStorage.getItem(FAVOURITES_STORAGE_KEY)
    const parsedFavourites = JSON.parse(storedFavourites || '[]')

    if (!Array.isArray(parsedFavourites)) {
      return []
    }

    return [
      ...new Set(
        parsedFavourites
          .map(normalizePhotoId)
          .filter((photoId) => photoId !== null),
      ),
    ]
  } catch {
    return []
  }
}

function favouritesReducer(state, action) {
  if (action.type !== 'TOGGLE_FAVOURITE') {
    return state
  }

  const photoId = normalizePhotoId(action.photoId)

  if (photoId === null) {
    return state
  }

  if (state.includes(photoId)) {
    return state.filter((id) => id !== photoId)
  }

  return [...new Set([...state, photoId])]
}

export default favouritesReducer
