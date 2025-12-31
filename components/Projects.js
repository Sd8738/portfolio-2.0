function Projects() {
    const [projects, setProjects] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProjects = async () => {
            try {
                // Fetch projects from Trickle Database
                // Using a large limit to ensure we get all projects
                const response = await trickleListObjects('project', 100, true);
                if (response && response.items) {
                    const allowedTitles = [
                        "Customer Sentiment Watchdog",
                        "Advanced Footprinting Research",
                        "Mutillidae Security Audit"
                    ];

                    // Filter to only show specific projects requested
                    const filteredProjects = response.items
                        .map(item => item.objectData)
                        .filter(project => allowedTitles.includes(project.title));
                    
                    setProjects(filteredProjects);
                }
            } catch (error) {
                console.error("Failed to fetch projects:", error);
                // Fallback or empty state could be handled here
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="section-padding bg-slate-50">
                <div className="container-custom text-center">
                    <div className="icon-loader animate-spin text-4xl text-[var(--primary)] mx-auto"></div>
                    <p className="mt-4 text-slate-600">Loading Operations...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="section-padding bg-slate-50" data-name="projects" data-file="components/Projects.js">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Security Operations & Projects</h2>
                    <p className="text-lg text-slate-600">
                        A showcase of my work in vulnerability assessment, tool development, and strategic security planning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        // Handle gradient fallback
                        const gradientClass = project.gradient ? `bg-gradient-to-br ${project.gradient}` : 'bg-slate-800';
                        
                        // Parse tags safely
                        let tags = [];
                        if (Array.isArray(project.tags)) {
                            tags = project.tags;
                        } else if (typeof project.tags === 'string' && project.tags.length > 0) {
                            tags = project.tags.split(',').map(t => t.trim());
                        }

                        return (
                            <div key={index} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                                <div className={`h-2 ${gradientClass}`}></div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-lg ${gradientClass} bg-opacity-10`}>
                                            <div className={`${project.icon || 'icon-shield'} text-white text-xl`}></div>
                                        </div>
                                        {project.featured && (
                                            <span className="badge bg-amber-100 text-amber-800 border border-amber-200">
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[var(--primary-dark)] font-medium mb-3 uppercase tracking-wide">
                                        {project.category}
                                    </p>
                                    <p className="text-slate-600 mb-6 flex-grow">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {tags.map((tag, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded bg-slate-100 text-slate-600 font-medium">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {(project.linkUrl) && (
                                        <div className="mt-6 pt-4 border-t border-slate-100">
                                            <a 
                                                href={project.linkUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-semibold text-[var(--primary-dark)] hover:text-[var(--primary)] transition-colors"
                                            >
                                                {project.linkText || 'View Project'}
                                                <span className="icon-arrow-right ml-1 w-4 h-4"></span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}