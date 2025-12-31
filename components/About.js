function About() {
    return (
        <section id="about" className="section-padding bg-white" data-name="about" data-file="components/About.js">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">About Me</h2>
                        <div className="prose prose-lg text-slate-600">
                            <p className="mb-4">
                                I possess a unique blend of skills that sets me apart in the security landscape. 
                                My approach combines rigorous analytical methodology with a deep understanding of security architecture, 
                                allowing me to identify logic flaws and patch vulnerabilities effectively.
                            </p>
                            <p className="mb-4">
                                I specialize in offensive security and digital forensics, focusing on actionable intelligence 
                                that helps organizations strengthen their defensive posture against evolving threats.
                            </p>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="icon-shield-check text-[var(--primary)] text-2xl mb-2"></div>
                                    <h3 className="font-semibold text-slate-900">Offensive Security</h3>
                                    <p className="text-sm text-slate-500">VAPT, SQL Injection, Burp Suite</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="icon-activity text-[var(--primary)] text-2xl mb-2"></div>
                                    <h3 className="font-semibold text-slate-900">Defensive Ops</h3>
                                    <p className="text-sm text-slate-500">Network Traffic Analysis, DFIR</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 sm:col-span-2">
                                    <div className="icon-search text-[var(--primary)] text-2xl mb-2"></div>
                                    <h3 className="font-semibold text-slate-900">Reconnaissance</h3>
                                    <p className="text-sm text-slate-500">OSINT, Shodan, Google Dorks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                         <div className="card p-8 bg-slate-900 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-[var(--primary)] rounded-full opacity-20 blur-2xl"></div>
                            
                            <h3 className="text-2xl font-bold mb-6 text-white">Select Achievements</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center mt-1 mr-4">
                                        <span className="icon-trophy text-white text-sm"></span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">i2i Hackathon Finalist</h4>
                                        <p className="text-slate-400 text-sm mt-1">Recognized for innovative environmental strategy and effective project pitching.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center mt-1 mr-4">
                                        <span className="icon-bug text-white text-sm"></span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">VAPT Case Study</h4>
                                        <p className="text-slate-400 text-sm mt-1">Identified and remediated critical CSRF and CSP misconfigurations in a controlled lab.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center mt-1 mr-4">
                                        <span className="icon-keyboard text-white text-sm"></span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Tool Development</h4>
                                        <p className="text-slate-400 text-sm mt-1">Engineered a touchless AI Virtual Keyboard using Computer Vision logic.</p>
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