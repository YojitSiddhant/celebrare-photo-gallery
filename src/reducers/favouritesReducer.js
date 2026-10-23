export const FAVOURITES_STORAGE_KEY = 'celebrare-photo-gallery-favourites'

export function getInitialFavourites() {
  try {
    const storedFavourites = localStorage.getItem(FAVOURITES_STORAGE_KEY)
    const parsedFavourites = JSON.parse(storedFavourites || '[]')

    if (!Array.isArray(parsedFavourites)) {
      return []
    }

    return [...new Set(parsedFavourites.map(String))]
  } catch {
    return []
  }
}

function favouritesReducer(state, action) {
  if (action.type !== 'TOGGLE_FAVOURITE' || action.photoId === undefined) {
    return state
  }

  const photoId = String(action.photoId)

  if (state.includes(photoId)) {
    return state.filter((id) => id !== photoId)
  }

  return [...new Set([...state, photoId])]
}

export default favouritesReducer
