

import { Play, ExternalLink, Github, Link } from "lucide-react";
import { useState } from "react";
import Button from "../../Helpers/Button";


export const ProjectCard = ({
    title,
    description,
    image,
    videoUrl,
    demoUrl,
    githubUrl,
    technologies
}) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <div className="group bg-gradient-card border-border shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-[1.02] overflow-hidden backdrop-blur-sm">
            <div className="relative aspect-video overflow-hidden bg-gradient-hero">
                <div className="absolute inset-0 bg-gradient-secondary opacity-5"></div>
                {isVideoPlaying && videoUrl ? (
                    <video
                        src={videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setIsVideoPlaying(false)}
                    />
                ) : (
                    <>
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {videoUrl && (
                            <div className="absolute inset-0 bg-gradient-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <Button
                                    variant="default"
                                    size="lg"
                                    onClick={() => setIsVideoPlaying(true)}
                                    className="shadow-button hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                    text={`Watch Demo`}
                                >

                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">Featured Project</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-gradient-secondary/10 text-foreground text-sm font-medium rounded-full border border-primary/20 hover:bg-gradient-primary/10 hover:border-primary/40 transition-all duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {demoUrl && (
                        <Button text={'View Live Demo'} variant="default" size="lg" asChild className="flex-1 shadow-button hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />

                            </a>
                        </Button>
                    )}

                </div>
            </div>
        </div>
    );
};