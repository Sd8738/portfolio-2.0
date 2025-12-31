function Certifications() {
    const certs = [
        { name: "The Future of Ethical Hacking: AI as an Ally", issuer: "Ai Certs", url: "https://www.linkedin.com/learning/certificates/1ABMP77117308" },
        { name: "AzureXplore", issuer: "WCE MLSC", url: "https://drive.google.com/file/d/10YZsRHZgzKLRrovdvKYyE-GWersJBiLW/view?usp=sharing" },
        { name: "Networking Foundations: Protocols and CLI", issuer: "LinkedIn Learning", url: "https://www.linkedin.com/learning/certificates/43ec15e205981431b5771db85e111f88cf7b702cbff0d6d5a72322664b132966" },
        { name: "Design Thinking: Understanding the Process", issuer: "LinkedIn Learning", url: "https://www.linkedin.com/learning/certificates/c4d59e9e2eb71b79b8d6bd2b0e4ea74668b463e8fa3c5bf2f471892206a7f7be" },
        { name: "Cybersecurity Awareness: Terminology", issuer: "LinkedIn Learning", url: "https://www.linkedin.com/learning/certificates/62996bf91e5d2e6f6d884475bee469ba0a225df581a5d61b1133a46df59d278d" },
        { name: "Cybersecurity Training", issuer: "Acmegrade", url: "https://cert.diceid.com/cid/JUHus1Mqgw" },
        { name: "Smartcops Hackathon", issuer: "Sangli Police", url: "https://drive.google.com/file/d/1Encle98n6rnNkzTg_ojcri2p-OEPR3-B/view?usp=sharing" },
        { name: "Prompt Engineering & Programming with OpenAI", issuer: "Columbia+", url: "https://badges.plus.columbia.edu/d0611a34-2046-4d52-a5ca-cb5cb3aafadd" },
        { name: "Cybersecurity Internship", issuer: "Acmegrade", url: "#" },
        { name: "Introduction to Cybersecurity", issuer: "HP LIFE", url: "#" },
        { name: "AI Agent Hackathon Participation", issuer: "Unstop", url: "https://drive.google.com/file/d/1tQl4E_Z5XcJLBMpjoTGmo5VbCKYoFOId/view?usp=drivesdk" },
    ];

    return (
        <section id="certifications" className="section-padding bg-white" data-name="certifications" data-file="components/Certifications.js">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <a 
                            key={index} 
                            href={cert.url} 
                            target="_blank" 
                            className="group block p-6 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[var(--primary)] hover:shadow-lg transition-all duration-200"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-bold text-slate-400 group-hover:text-[var(--primary)] transition-colors">
                                    {cert.issuer}
                                </span>
                                <div className="icon-external-link w-4 h-4 text-slate-300 group-hover:text-[var(--primary)]"></div>
                            </div>
                            <h3 className="font-semibold text-slate-800 leading-snug group-hover:text-black">
                                {cert.name}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}