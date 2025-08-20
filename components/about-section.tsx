"use client"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Code, Database, Eye, Cpu, Award, Target, Users } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "Machine Learning", level: 90, icon: Brain, color: "text-primary" },
    { name: "Computer Vision", level: 85, icon: Eye, color: "text-accent" },
    { name: "Deep Learning", level: 88, icon: Cpu, color: "text-chart-3" },
    { name: "Python", level: 92, icon: Code, color: "text-chart-2" },
    { name: "Data Science", level: 80, icon: Database, color: "text-chart-4" },
  ]

  const expertise = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Advanced algorithms, model optimization, and predictive analytics for complex problem-solving.",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Image processing, object detection, and pattern recognition using state-of-the-art techniques.",
      technologies: ["OpenCV", "YOLO", "CNN", "Image Segmentation"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Data preprocessing, feature engineering, and building robust data pipelines for ML workflows.",
      technologies: ["Pandas", "NumPy", "SQL", "Data Visualization"],
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintained strong academic performance with focus on AI and ML coursework",
    },
    {
      icon: Target,
      title: "Project Innovation",
      description: "Developed cutting-edge solutions for environmental monitoring and agricultural technology",
    },
    {
      icon: Users,
      title: "Research Focus",
      description: "Specialized in explainable AI and practical applications of machine learning",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="glass mb-4 px-4 py-2">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            Passionate about <span className="text-primary">AI Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a Computer Science Engineering graduate, I combine theoretical knowledge with practical experience to
            create intelligent systems that address real-world challenges in environmental monitoring and agricultural
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="glass-strong rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My passion for artificial intelligence began during my undergraduate studies at East West University,
                  where I discovered the transformative potential of machine learning and computer vision technologies.
                </p>
                <p>
                  Through hands-on projects like CNN-based flower recognition systems and YOLOv11 microplastic detection
                  models, I've developed expertise in creating practical AI solutions that make a meaningful impact.
                </p>
                <p>
                  I'm particularly interested in <span className="text-accent font-semibold">explainable AI</span> and
                  developing systems that are not only accurate but also interpretable and trustworthy.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`glass hover:glass-strong rounded-xl p-4 transition-all duration-300 delay-${index * 100}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="glass-strong rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className={`h-5 w-5 ${skill.color}`} />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={isVisible ? skill.level : 0}
                      className="h-2 transition-all duration-1000 delay-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">Areas of Expertise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge and practical experience across key domains of artificial intelligence and machine
              learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <Card
                key={area.title}
                className={`glass-strong hover:scale-105 transition-all duration-300 delay-${index * 100} border-0`}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-foreground">{area.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="glass text-xs">
                        {tech}
                      </Badge>
                    ))}
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
