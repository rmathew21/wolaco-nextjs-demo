export function SiteFooter() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-xs sm:flex-row sm:items-center sm:justify-between md:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} WOLACO Demo. Built by Robin Mathew/Robo Web Solutions.</p>
                <div className="flex flex-wrap gap-4">
                    <button className="hover:text-slate-100">Privacy</button>
                    <button className="hover:text-slate-100">Terms</button>
                    <button className="hover:text-slate-100">Help</button>
                </div>
            </div>
        </footer>
    );
}