function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800" data-name="footer" data-file="components/Footer.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Sumant's <span className="text-[var(--primary)]">Portfolio</span>
                        </h3>
                        <p className="text-slate-400 max-w-xs">
                            Securing digital assets through comprehensive vulnerability assessment and strategic defense mechanisms.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-[var(--primary)] transition-colors">About</a></li>
                            <li><a href="#skills" className="hover:text-[var(--primary)] transition-colors">Skills</a></li>
                            <li><a href="#projects" className="hover:text-[var(--primary)] transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div className="flex flex-col space-y-3">
                            <a href="mailto:sumantdeshmukh@outlook.com" className="flex items-center hover:text-[var(--primary)] transition-colors">
                                <div className="icon-mail w-5 h-5 mr-3"></div>
                                sumantdeshmukh@outlook.com
                            </a>
                            <a href="https://github.com/Sd8738" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[var(--primary)] transition-colors">
                                <div className="icon-github w-5 h-5 mr-3"></div>
                                GitHub Profile
                            </a>
                            <a href="https://www.linkedin.com/in/sumant-deshmukh/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[var(--primary)] transition-colors">
                                <div className="icon-linkedin w-5 h-5 mr-3"></div>
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {currentYear} Sumant Deshmukh. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Cybersecurity Analyst & Strategy</p>
                </div>
            </div>
        </footer>
    );
}