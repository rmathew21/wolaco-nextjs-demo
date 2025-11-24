const products = [
    {
        title: "Hudson Compression Short",
        description: "Everyday training short with sweat-proof phone pocket.",
        tag: "Best seller",
    },
    {
        title: "West Side Jogger",
        description: "Tapered jogger built for commute, warm-up, and cooldown.",
        tag: "New",
    },
    {
        title: "Pier 26 1/4 Zip",
        description: "Lightweight top that moves with you, never against you.",
        tag: "Limited",
    },
];

export function ProductHighlightSection() {
    return (
        <section className="bg-slate-950 py-16 text-slate-50 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                            Built for the way you actually train.
                        </h2>
                        <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
                            From early-morning runs to late-night lifts, every piece is
                            engineered to stay locked in, keep essentials secure, and never
                            get in the way of your next rep.
                        </p>
                    </div>
                    <button className="mt-2 rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-100 hover:border-slate-300">
                        View all collections
                    </button>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {products.map((product) => (
                        <article
                            key={product.title}
                            className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-500/70 hover:shadow-xl"
                            >
                            <div className="space-y-3">
                                <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                                    {product.tag}
                                </span>
                                <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                                    {product.title}
                                </h3>
                                <p className="text-sm text-slate-300"></p>
                                {product.description}
                            </div>

                            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                                <p className="grou-hover:text-slate-100">
                                    Shop this piece
                                    <span className="m1-1 inline-block transition group-hover:translate-x-0 5">
                                    →
                                    </span>
                                </p>
                                <p>Sizes XS-XXL</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}