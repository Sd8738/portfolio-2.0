function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`} data-name="navigation" data-file="components/Navigation.js">
            <div className="container-custom flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-slate-900 tracking-tight">
                    Sumant's <span className="text-[var(--primary)]">Portfolio</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-sm font-medium text-slate-600 hover:text-[var(--primary)] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="mailto:sumantdeshmukh@outlook.com" 
                        className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-slate-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={isOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-base font-medium text-slate-600 hover:text-[var(--primary)] py-2 block"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                     <a 
                        href="mailto:sumantdeshmukh@outlook.com"
                        className="text-base font-medium text-[var(--primary)] py-2 block"
                        onClick={() => setIsOpen(false)}
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </nav>
    );
}