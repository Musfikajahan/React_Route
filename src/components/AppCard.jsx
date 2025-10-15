import React from 'react'
import { Link } from 'react-router-dom'

const AppCard = ({ app }) => {
  const { id, title, image, downloads, rating } = app

  return (
    <Link to={`/app/${id}`} className="block">
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200 p-5">
        <div className="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
          <div className="aspect-square">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.src = '/images/placeholder.svg' }}
            />
          </div>
        </div>
        <h3 className="mt-5 text-[22px] font-semibold text-slate-900 tracking-tight">
          {title}
        </h3>
        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-3 py-1.5 text-emerald-700 text-sm font-medium">
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path fill="currentColor" d="M10 12.5 5.8 8.3l1.4-1.4L9 8.7V2h2v6.7l1.8-1.8 1.4 1.4zM4 16v-2h12v2H4z"/>
            </svg>
            {Intl.NumberFormat('en', { notation: 'compact' }).format(downloads)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-3 py-1.5 text-amber-600 text-sm font-semibold">
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path fill="currentColor" d="M10 1.8 12.6 7l5.8.5-4.3 3.5 1.3 5.6L10 13.9 4.6 16.6l1.3-5.6L1.6 7.5 7.4 7z"/>
            </svg>
            {rating}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default AppCard
