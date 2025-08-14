

import { ExternalLink } from "lucide-react";
import project1Image from "/ceoCopy.jpg";
import project2Image from "/ceoCopy.jpg";
import project3Image from "/ceoCopy.jpg";
import { ProjectCard } from "./CardContent";
import Button from "../../Helpers/Button";

const projects = [
    {
        title: "Modern Dashboard App",
        description: "A comprehensive admin dashboard with real-time analytics, user management, and beautiful data visualizations. Built with modern technologies for optimal performance.",
        image: project1Image,
        videoUrl: "https://example.com/demo1.mp4", // Replace with your actual video URL
        demoUrl: "https://example.com/demo1",
        githubUrl: "https://github.com/yourusername/project1",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"]
    },
    {
        title: "Mobile-First E-commerce",
        description: "A fully responsive e-commerce platform with seamless mobile experience, payment integration, and inventory management. Optimized for conversions.",
        image: project2Image,
        videoUrl: "https://example.com/demo2.mp4", // Replace with your actual video URL
        demoUrl: "https://example.com/demo2",
        githubUrl: "https://github.com/yourusername/project2",
        technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"]
    },
    {
        title: "Social Media Platform",
        description: "A feature-rich social platform with real-time messaging, content sharing, and community features. Scalable architecture handling thousands of users.",
        image: project3Image,
        videoUrl: "https://example.com/demo3.mp4", // Replace with your actual video URL
        demoUrl: "https://example.com/demo3",
        githubUrl: "https://github.com/yourusername/project3",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"]
    },
    {
        title: "AI-Powered Analytics Tool",
        description: "Advanced analytics platform leveraging machine learning for predictive insights. Clean interface with powerful data processing capabilities.",
        image: project1Image,
        demoUrl: "https://example.com/demo4",
        githubUrl: "https://github.com/yourusername/project4",
        technologies: ["Python", "TensorFlow", "React", "FastAPI"]
    },
    {
        title: "Task Management Suite",
        description: "Collaborative project management tool with team coordination, timeline tracking, and resource allocation. Perfect for agile development teams.",
        image: project2Image,
        videoUrl: "https://example.com/demo5.mp4", // Replace with your actual video URL
        demoUrl: "https://example.com/demo5",
        githubUrl: "https://github.com/yourusername/project5",
        technologies: ["Vue.js", "Firebase", "Vuetify", "Cloud Functions"]
    },
    {
        title: "Real Estate Platform",
        description: "Modern property listing platform with advanced search filters, virtual tours, and agent management. Mobile-optimized for on-the-go browsing.",
        image: project3Image,
        demoUrl: "https://example.com/demo6",
        githubUrl: "https://github.com/yourusername/project6",
        technologies: ["React", "GraphQL", "Apollo", "PostgreSQL"]
    }
];

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 px-4 text-center bg-gradient-hero">
                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                <div className="relative max-w-6xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary/10 rounded-full border border-primary/20 mb-8">
                        <div className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse"></div>
                        <span className="text-sm font-medium text-primary uppercase tracking-wide">Premium Portfolio</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight">
                        Professional
                        <br />
                        <span className="bg-gradient-secondary bg-clip-text text-transparent">Digital Solutions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                        Explore my curated collection of high-quality web applications, mobile experiences,
                        and digital products designed to drive business growth and user engagement.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 px-4 bg-gradient-hero">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">Featured Work</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Each project represents a unique solution crafted with attention to detail and business impact
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                videoUrl={project.videoUrl}
                                demoUrl={project.demoUrl}
                                githubUrl={project.githubUrl}
                                technologies={project.technologies}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-primary/5">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button text={"Get Started Today"} size="lg" className="shadow-button hover:shadow-lg transform hover:scale-105 transition-all duration-300">

                        </Button>
                        <Button text={"Schedule Consultation"} variant="outline" size="lg" className="border-primary/30 hover:bg-gradient-primary/10">

                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-4 border-t border-border bg-gradient-card">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">Professional Services</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>Custom Web Development</li>
                                <li>Mobile App Development</li>
                                <li>E-commerce Solutions</li>
                                <li>UI/UX Design</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">Technologies</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>React & Next.js</li>
                                <li>TypeScript</li>
                                <li>Node.js & Python</li>
                                <li>Cloud Platforms</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-4">Connect</h3>
                            <div className="flex gap-4">
                                <Button variant="outline" size="sm" asChild>
                                    <a href="mailto:your.email@example.com">Email</a>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a href="https://github.com/yourusername">GitHub</a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-border text-center">
                        <p className="text-muted-foreground">
                            © 2024 Professional Portfolio. Delivering exceptional digital experiences.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;