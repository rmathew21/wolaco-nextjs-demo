export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-slate-50">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(cicle_at_bottom,_rgba(148,163,184,0.25),_transparent_60%)]" />

            <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-24 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8 lg:pt-28">
                <div className="max-w-xl space-y-6">
                    <p className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                        Made for movement
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                        Built to {" "}
                        <span className="bg-gradient-to-r from-sky-400 to-slate-100 bg-clip-text text-transparent">
                            outlast every rep.
                        </span>
                    </h1>

                    <p className="text-base text-slate-300 sm:text-lg">
                        Compression and training essentials engineered in New York City.
                        Sweat-proof, distraction-free storage, and a fit that stays locked
                        in-whether you're on mile one or minute ninety.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="rounded-full bg-sky-400 px-6 py-2 5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:brightness-110">
                            Shop men's compression
                        </button>
                        <button className="rounded-full border border-slate-600 px-6 py-2 5 text-sm font-semibold text-slate-100 hover:border-slate-300 hover:text-white">
                            Explore all training gear
                        </button>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-8 text-sm text-slate-300">
                        <div>
                            <p className="text-2xl font-semibold text-slate-50">100K+</p>
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                workouts completed
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-slate-50">4.8</p>
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                average review
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl font-semibold text-slate-50">Sweat-proof</p>
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                                pocket storage
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-md md:w-auto">
                    <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 p-6 shadow-2xl">
                        <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                            <span>Compression Shorts</span>
                            <span>NYC / 45° • Night run</span>
                        </div>

                        <div className="aspect-[4/5] w-full rounded-2xl bg-graident-to-br from-slate-800 via-slate-900 to-slate-950 shadow-inner" />

                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-100">
                                    North Moore Compression
                                </p>
                                <p className="text-xs text-slate-400">Phone-secure pocket • 7&quot; inseam</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-slate-50">$78</p>
                                <p className="text-[11px] text-slate-400">Free shipping $100+</p>
                            </div>
                        </div>

                        <button className="mt-4 w-full rounded-full bg-slate-100/95 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white">
                            Add to bag
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}