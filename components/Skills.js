function Skills() {
    const skillCategories = [
        {
            title: "VAPT & Offensive Security",
            icon: "icon-sword",
            skills: ["Penetration Testing", "Ethical Hacking", "OWASP Top 10", "Burp Suite", "SQL Injection", "XSS"]
        },
        {
            title: "OSINT & Reconnaissance",
            icon: "icon-radar",
            skills: ["Footprinting", "Shodan", "Google Dorks", "Wappalyzer", "Netcraft", "SSL Labs"]
        },
        {
            title: "Network Security",
            icon: "icon-network",
            skills: ["Wireshark", "Network Protocols", "Linux CLI", "Tor & VPN", "Proxychains", "Anonymity Tools"]
        },
        {
            title: "AI Security & Gen Tech",
            icon: "icon-bot",
            skills: ["Prompt Engineering", "Generative AI", "OpenAI API", "LLMs", "AI Security", "Data Analysis"]
        },
        {
            title: "Development & Cloud",
            icon: "icon-code-2",
            skills: ["Python", "Git & GitHub", "Azure Cloud", "Cloud Deployment", "Problem Solving"]
        },
        {
            title: "Leadership",
            icon: "icon-users",
            skills: ["Project Management", "Team Leadership", "Product Development", "Design Thinking"]
        }
    ];

    return (
        <section id="skills" className="section-padding bg-slate-50" data-name="skills" data-file="components/Skills.js">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Skills</h2>
                    <p className="text-slate-600">A comprehensive arsenal of tools and methodologies I use to secure and analyze systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="card p-6 hover:border-[var(--primary)] hover:shadow-lg transition-all group">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-[var(--primary-dark)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                    <div className={`${category.icon} text-xl`}></div>
                                </div>
                                <h3 className="ml-3 font-bold text-slate-800">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span key={idx} className="badge bg-slate-100 text-slate-600 border border-slate-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}