function HeartIcon({ filled }) {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  )
}

function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <img
        className="aspect-[3/2] w-full object-cover"
        src={`https://picsum.photos/id/${photo.id}/600/400`}
        alt={`Photograph by ${photo.author}`}
        loading="lazy"
      />
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="text-sm font-medium text-slate-700">{photo.author}</p>
        <button
          className={`rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 ${
            isFavourite
              ? 'text-red-500 hover:text-red-600'
              : 'text-slate-400 hover:text-red-500'
          }`}
          type="button"
          aria-label={`${isFavourite ? 'Remove' : 'Add'} ${photo.author} photo ${isFavourite ? 'from' : 'to'} favourites`}
          aria-pressed={isFavourite}
          onClick={() => onToggleFavourite(photo.id)}
        >
          <HeartIcon filled={isFavourite} />
        </button>
      </div>
    </article>
  )
}

export default PhotoCard
