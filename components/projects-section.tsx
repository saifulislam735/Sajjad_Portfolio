"use client"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, Award, Zap, Target } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "CNN-Based Flower Recognition System",
      category: "Computer Vision",
      description:
        "Advanced deep learning model for automated flower species identification using Convolutional Neural Networks. Achieved 94% accuracy across 102 flower categories with real-time classification capabilities.",
      longDescription:
        "This project implements a sophisticated computer vision system that can accurately identify and classify different flower species from images. Using state-of-the-art CNN architectures, the model was trained on a comprehensive dataset and optimized for both accuracy and inference speed.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
      features: [
        "Real-time flower classification",
        "94% accuracy on test dataset",
        "Support for 102 flower categories",
        "Mobile-optimized inference",
        "Data augmentation techniques",
      ],
      metrics: {
        accuracy: "94%",
        categories: "102",
        dataset: "8K+ images",
      },
      image: "/cnnbaseflowerImg.png",
      githubUrl: "#",
      liveUrl: "#",
      status: "Completed",
      impact: "Environmental Research",
    },
    {
      id: 2,
      title: "YOLOv11 Microplastic Detection",
      category: "Environmental AI",
      description:
        "Cutting-edge object detection system for identifying microplastics in marine environments using YOLOv11 architecture. Contributes to environmental monitoring and ocean conservation efforts.",
      longDescription:
        "This innovative project addresses the critical environmental challenge of microplastic pollution in marine ecosystems. By leveraging the latest YOLOv11 object detection framework, the system can accurately detect and quantify microplastic particles in water samples and marine imagery.",
      technologies: ["Python", "YOLOv11", "PyTorch", "OpenCV", "Ultralytics", "Roboflow"],
      features: [
        "Real-time microplastic detection",
        "Multi-scale object recognition",
        "Environmental impact assessment",
        "Automated counting and sizing",
        "Integration with marine monitoring systems",
      ],
      metrics: {
        precision: "89%",
        recall: "92%",
        fps: "45 FPS",
      },
      image: "/microplastic.webp",
      githubUrl: "#",
      liveUrl: "#",
      status: "In Development",
      impact: "Ocean Conservation",
    },
    {
      id: 3,
      title: "Agricultural Crop Health Monitor",
      category: "AgriTech AI",
      description:
        "Machine learning system for early detection of crop diseases and health assessment using satellite imagery and IoT sensors. Helps farmers optimize crop yield and reduce losses.",
      longDescription:
        "This comprehensive agricultural technology solution combines computer vision, machine learning, and IoT data to provide farmers with actionable insights about crop health. The system analyzes satellite imagery, weather data, and sensor readings to predict and prevent crop diseases.",
      technologies: ["Python", "Scikit-learn", "Satellite APIs", "IoT Integration", "Flask", "PostgreSQL"],
      features: [
        "Early disease detection",
        "Yield prediction modeling",
        "Weather pattern analysis",
        "IoT sensor integration",
        "Farmer dashboard interface",
      ],
      metrics: {
        accuracy: "87%",
        coverage: "500+ acres",
        detection: "7 days early",
      },
      image: "/agriHealth.png",
      githubUrl: "#",
      liveUrl: "#",
      status: "Prototype",
      impact: "Agricultural Innovation",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-accent text-accent-foreground"
      case "In Development":
        return "bg-primary text-primary-foreground"
      case "Prototype":
        return "bg-chart-3 text-white"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "Environmental Research":
        return Target
      case "Ocean Conservation":
        return Zap
      case "Agricultural Innovation":
        return Award
      default:
        return Target
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="glass mb-4 px-4 py-2">
            Featured Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            AI Solutions for <span className="text-primary">Real-World Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of machine learning and computer vision projects that address environmental challenges
            and agricultural innovation through cutting-edge AI technologies.
          </p>
        </div>

        {/* Featured Project */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="glass-strong border-0 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={projects[activeProject].image || "/placeholder.svg"}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover min-h-[400px] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getStatusColor(projects[activeProject].status)}>
                    {projects[activeProject].status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="glass">
                    {projects[activeProject].category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8 lg:p-12 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    {(() => {
                      const IconComponent = getImpactIcon(projects[activeProject].impact)
                      return <IconComponent className="h-5 w-5 text-primary" />
                    })()}
                    <span className="text-sm font-medium text-primary">{projects[activeProject].impact}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{projects[activeProject].longDescription}</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(projects[activeProject].metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-3 glass rounded-lg">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="glass-strong hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button
                    variant="outline"
                    className="glass hover:glass-strong transition-all duration-300 bg-transparent"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" className="glass hover:glass-strong transition-all duration-300">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Project Navigation */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex space-x-2 glass-strong rounded-full p-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeProject === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {project.title.split(" ")[0]} {project.title.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">All Projects</h3>
            <p className="text-muted-foreground">Comprehensive overview of my AI and machine learning work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`glass-strong hover:scale-105 transition-all duration-300 delay-${index * 100} border-0 overflow-hidden cursor-pointer`}
                onClick={() => setActiveProject(index)}
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={getStatusColor(project.status)} variant="secondary">
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="glass text-xs">
                      {project.category}
                    </Badge>
                    <h4 className="font-serif font-bold text-foreground line-clamp-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="glass text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="glass text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
