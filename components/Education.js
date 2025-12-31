function Education() {
    return (
        <section className="section-padding bg-white border-t border-slate-100" data-name="education" data-file="components/Education.js">
            <div className="container-custom">
                <h2 className="text-3xl font-bold text-slate-900 mb-12">Education</h2>
                <div className="space-y-8 max-w-3xl">
                    <div className="flex gap-4 items-start">
                        <div className="mt-1.5 w-3 h-3 rounded-full bg-[var(--primary)] flex-shrink-0"></div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">B.TECH Electronics and Computer Science</h3>
                            <p className="text-slate-600 text-lg">Padmabhoohan Vasantrodada Patil Institute of Technology, Budhgoan</p>
                            <p className="text-slate-500 mt-1">Minor in AI and Data Science</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                        <div className="mt-1.5 w-3 h-3 rounded-full bg-slate-300 flex-shrink-0"></div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">HSC (Science/CS)</h3>
                            <p className="text-slate-600">Willingdon College of Arts & Science</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="mt-1.5 w-3 h-3 rounded-full bg-slate-300 flex-shrink-0"></div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">SSC</h3>
                            <p className="text-slate-600">Cambridge School, Miraj</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}