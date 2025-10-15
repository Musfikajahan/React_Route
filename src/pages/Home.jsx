import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import AppCard from '../components/AppCard'
import heroBg from '../assets/hero.png' 
export default function Home() {
    const appsFromLoader = useLoaderData()
    const appsArray = Array.isArray(appsFromLoader)
        ? appsFromLoader
        : Array.isArray(appsFromLoader?.apps)
            ? appsFromLoader.apps
            : []

    const topApps = appsArray.slice(0, 8)

    return (
        <div>
            <section className="relative overflow-hidden bg-base-200">

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-no-repeat bg-center bg-contain z-0"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: '720px auto',
                        backgroundPosition: 'center 120px',
                        marginTop: '370px',
                    }}
                />
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        We Build <br /><span className="text-[#7C3AED]">Productive</span> Apps
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-500 mb-10">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <a
                            href="https://play.google.com/store/apps?hl=en"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-800 shadow-sm hover:bg-slate-50 transition-colors"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                <path fill="#01875f" d="M2.319 20.76c-.427-.28-.427-.726 0-1.01l8.34-5.45 2.45 2.45z"/>
                                <path fill="#4285f4" d="m13.11 16.75-2.45-2.45L18.76 6.2c.427-.28.873-.28 1.3 0 .427.28.427.726 0 1.01z"/>
                                <path fill="#ea4335" d="M2.319 3.24c-.427-.28-.427-.726 0-1.01C2.746 1.95 3.192 1.95 3.62 2.23l8.34 5.45-2.45 2.45z"/>
                                <path fill="#fbbc04" d="m10.66 12.25 2.45-2.45L20.06 4.3c.427-.28.427-.726 0-1.01L2.32 20.76c.427.28.873.28 1.3 0z"/>
                            </svg>
                            <span className="text-sm font-medium">Google Play</span>
                        </a>
                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-800 shadow-sm hover:bg-slate-50 transition-colors"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                                <path fill="#007aff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                <path fill="#007aff" d="M18.71 7.21a1.006 1.006 0 0 0-1.42 0l-6.58 6.58-2.5-2.5a1.006 1.006 0 0 0-1.42 1.42L9.29 15.2a1.006 1.006 0 0 0 1.42 0l7.29-7.29a1.006 1.006 0 0 0 0-1.42z"/>
                            </svg>
                            <span className="text-sm font-medium">App Store</span>
                        </a>
                    </div>
                    <div className="mt-10 h-[340px] md:h-[420px]" />
                </div>
            </section>

            <section className="w-full text-white bg-gradient-to-r from-[#632EE3] via-[#7E4DF0] to-[#9F62F2] ">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-center text-2xl md:text-3xl font-bold">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <p className="text-xs md:text-sm opacity-90">Total Downloads</p>
                            <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">29.6M</p>
                            <p className="mt-2 text-xs md:text-sm opacity-90">21% More Than Last Month</p>
                        </div>

                        <div>
                            <p className="text-xs md:text-sm opacity-90">Total Reviews</p>
                            <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">906K</p>
                            <p className="mt-2 text-xs md:text-sm opacity-90">46% More Than Last Month</p>
                        </div>

                        <div>
                            <p className="text-xs md:text-sm opacity-90">Active Apps</p>
                            <p className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">132+</p>
                            <p className="mt-2 text-xs md:text-sm opacity-90">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center">Trending Apps</h2>
                <p className="text-center text-slate-500 mt-2">
                    Explore All Trending Apps on the Market developed by us.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(Array.isArray(topApps) ? topApps : []).map(app => (
                        <AppCard key={app.id} app={app} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/apps" className="btn btn-outline">Show All</Link>
                </div>
            </section>
        </div>
    )
}
