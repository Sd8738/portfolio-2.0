function Experience() {
    return (
        <section id="experience" className="section-padding bg-white" data-name="experience" data-file="components/Experience.js">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Professional Experience</h2>

                <div className="relative border-l-2 border-slate-200 pl-8 ml-4 space-y-12">
                    {/* Item 1 */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white bg-[var(--primary)]"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Cybersecurity Intern</h3>
                                <p className="text-[var(--primary-dark)] font-medium">Acmegrade</p>
                            </div>
                            <span className="text-sm text-slate-500 font-mono mt-1 sm:mt-0">Internship Completed</span>
                        </div>
                        <p className="text-slate-600 mb-4 max-w-3xl">
                            Built a strong foundation in information security, DFIR, and ethical hacking. 
                            Worked on Linux-based environments, threat detection, malware analysis, and security automation.
                        </p>
                        
                        <div className="mb-4">
                            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">Key Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Wireshark', 'Burp Suite', 'Nmap', 'Metasploit', 'Shodan', 'Linux', 'Tor'].map(tool => (
                                    <span key={tool} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <h4 className="text-sm font-bold text-slate-900 mb-3">Mini Projects Executed:</h4>
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <span className="icon-search text-[var(--primary)] mt-1 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-slate-800 text-sm">Footprinting & Reconnaissance</strong>
                                        <p className="text-xs text-slate-500">Subdomain discovery, Google Dorking, and IP analysis using Shodan & Netcraft.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="icon-ghost text-[var(--primary)] mt-1 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-slate-800 text-sm">Anonymity in Cyber Ops</strong>
                                        <p className="text-xs text-slate-500">MAC spoofing, VPN/Proxychains setup, and TOR configuration for secure testing.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="icon-shield-alert text-[var(--primary)] mt-1 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-slate-800 text-sm">VAPT Case Study: Mutillidae</strong>
                                        <p className="text-xs text-slate-500">Identified Missing Anti-CSRF Tokens & CSP headers. Mapped 250+ URLs with OWASP ZAP.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}