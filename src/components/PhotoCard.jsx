function PhotoCard({ photo }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <img
        className="aspect-[3/2] w-full object-cover"
        src={`https://picsum.photos/id/${photo.id}/600/400`}
        alt={`Photograph by ${photo.author}`}
        loading="lazy"
      />
      <p className="px-4 py-3 text-sm font-medium text-slate-700">{photo.author}</p>
    </article>
  )
}

export default PhotoCard
