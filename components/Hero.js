function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" data-name="hero" data-file="components/Hero.js">
            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-[var(--primary-dark)] uppercase bg-cyan-50 rounded-full">
                        Cybersecurity Analyst
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                        Defending Digital Frontiers with <span className="text-[var(--primary)]">Precision & Strategy</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Specializing in VAPT, Security Automation, and Digital Forensics to build resilient systems against evolving threats.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#projects" className="btn-primary">
                            View Security Operations
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary-light)] rounded-full blur-3xl opacity-50 mix-blend-multiply filter"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply filter animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter animation-delay-4000"></div>
            </div>
        </section>
    );
}