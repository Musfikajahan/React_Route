import React, { useState, useMemo } from 'react'
import { useLoaderData } from 'react-router-dom'
import AppCard from '../components/AppCard.jsx'
import notFoundImg from '../assets/App-Error.png'
const AllApps = () => {
  const allAppsData = useLoaderData()
  const [searchTerm, setSearchTerm] = useState('')

  const apps = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    if (!q) return allAppsData || []
    return (allAppsData || []).filter(app =>
      app.title.toLowerCase().includes(q)
    )
  }, [allAppsData, searchTerm])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">All Apps</h1>
        <p className="text-gray-500 mt-2">Browse our extensive collection of applications.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <p className="font-semibold text-lg">{apps.length} Apps Found</p>

        <div className="relative w-full md:w-80" role="search" aria-label="Search apps">
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              <path fill="currentColor" d="m19 19-4.1-4.1A7.5 7.5 0 1 0 15 15l4 4zM3 8.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z"/>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search apps..."
            className="w-full rounded-md border border-slate-300 pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search apps by title"
          />
        </div>
      </div>

      {apps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {apps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <img
              src={notFoundImg}
              alt="App not found illustration"
              className="mx-auto w-full max-w-sm h-auto"
            />
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-slate-800">
              OPPS!! APP NOT FOUND
            </h2>
            <p className="mt-2 text-slate-500">
              The App you are requesting is not found on our system. Please try another apps.
            </p>
            <a
              href="/apps"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#7C3AED] px-5 py-2.5 text-white font-medium shadow-sm hover:bg-[#6d33d4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C3AED]"
            >
              Go Back!
            </a>
          </div>
        </section>
      )}
    </div>
  )
}

export default AllApps
