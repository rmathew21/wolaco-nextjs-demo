export function CTASection() {
    return (
        <section className="bg-slate-950 pb-16 pt-10 text-slate-50 sm:pb-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-sky-500/15 via-slate-900 to-slate-950 px-6 py-10 sm:px-10 sm:py-12">
                    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                        <div className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                                WOLACO Run Club
                            </p>
                            <h2 className="text-2xl font-semibold tracking-tight smLtext-3xl">
                                Ready for your next night run along the West Side Highway?
                            </h2>
                            <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                                Join the community, get early access to drops, and receive
                                training notes from NYC athletes who actually test this gear in
                                the streets.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <input 
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-400 sm:w-64"
                            />
                            <button className="rounded-full bg-sky-400 px-6 py-2 5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 hover:brightness-110">
                                Join the list
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}