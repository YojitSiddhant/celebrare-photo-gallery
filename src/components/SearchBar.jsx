function SearchBar({ value, onChange }) {
  return (
    <div className="mb-8">
      <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="photo-search">
        Search by photographer name
      </label>
      <input
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
        id="photo-search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by photographer name"
      />
    </div>
  )
}

export default SearchBar
