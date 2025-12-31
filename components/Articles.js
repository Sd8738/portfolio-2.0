function Articles() {
    return (
        <section className="section-padding bg-slate-50" data-name="articles" data-file="components/Articles.js">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <a href="https://sumant9.hashnode.dev/how-i-started-learning-cybersecurity-with-hack-the-box-and-tryhackme" target="_blank" className="block group">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col">
                            <div className="text-sm text-slate-500 mb-2">Jan 15, 2024</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[var(--primary)] transition-colors">How I Started Learning Cybersecurity</h3>
                            <p className="text-slate-600 text-sm mb-4 flex-1">Journey into cybersecurity through hands-on practice with Hack The Box and TryHackMe.</p>
                            <span className="text-[var(--primary-dark)] text-sm font-medium flex items-center">Read Article <span className="icon-arrow-right ml-1 w-4 h-4"></span></span>
                        </div>
                    </a>

                    <a href="https://sumant9.hashnode.dev/first-step-in-ethical-hacking" target="_blank" className="block group">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col">
                            <div className="text-sm text-slate-500 mb-2">Dec 20, 2023</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[var(--primary)] transition-colors">Understanding Footprinting</h3>
                            <p className="text-slate-600 text-sm mb-4 flex-1">Exploring OWASP Top 10 vulnerabilities with hands-on examples and remediation strategies.</p>
                            <span className="text-[var(--primary-dark)] text-sm font-medium flex items-center">Read Article <span className="icon-arrow-right ml-1 w-4 h-4"></span></span>
                        </div>
                    </a>

                    <a href="https://sumant9.hashnode.dev/blog-on-anonimity" target="_blank" className="block group">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow h-full flex flex-col">
                            <div className="text-sm text-slate-500 mb-2">Dec 15, 2023</div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[var(--primary)] transition-colors">Be Anonymous on the Internet</h3>
                            <p className="text-slate-600 text-sm mb-4 flex-1">Essential Linux commands and techniques for online anonymity.</p>
                            <span className="text-[var(--primary-dark)] text-sm font-medium flex items-center">Read Article <span className="icon-arrow-right ml-1 w-4 h-4"></span></span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}