"use client"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"

export function EducationSection() {
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

    const element = document.getElementById("education")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      id: 1,
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "East West University",
      location: "Dhaka, Bangladesh",
      year: "2021 - 2025",
      gpa: "3.8/4.0",
      status: "Expected Graduation",
      focus: ["Machine Learning", "Computer Vision", "Deep Learning", "Artificial Intelligence"],
      achievements: [
        "Specialized in AI and ML coursework",
        "Completed advanced projects in computer vision",
        "Research focus on explainable AI",
        "Active member of CS department",
      ],
      icon: GraduationCap,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka Imperial College",
      location: "Dhaka, Bangladesh",
      year: "2018 - 2020",
      gpa: "5.00/5.00",
      status: "Completed",
      focus: ["Science Group", "Mathematics", "Physics", "Chemistry", "Biology"],
      achievements: [
        "Perfect GPA of 5.00",
        "Excellence in Mathematics and Physics",
        "Science Olympiad participant",
        "Academic merit scholarship recipient",
      ],
      icon: Award,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      institution: "Sher-E-Bangla Nagar Government Boys' High School",
      location: "Dhaka, Bangladesh",
      year: "2016 - 2018",
      gpa: "4.56/5.00",
      status: "Completed",
      focus: ["Science Group", "Mathematics", "General Science", "English"],
      achievements: [
        "Strong academic foundation in sciences",
        "Mathematics competition winner",
        "School debate team member",
        "Community service volunteer",
      ],
      icon: BookOpen,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
  ]

  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Coursera - Stanford University",
      year: "2024",
      status: "Completed",
    },
    {
      title: "Deep Learning for Computer Vision",
      provider: "edX - MIT",
      year: "2023",
      status: "Completed",
    },
    {
      title: "Python for Data Science",
      provider: "DataCamp",
      year: "2023",
      status: "Completed",
    },
    {
      title: "TensorFlow Developer Certificate",
      provider: "Google",
      year: "2024",
      status: "In Progress",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="glass mb-4 px-4 py-2">
            Education & Learning
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            Academic <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My educational journey has provided a strong foundation in computer science, mathematics, and specialized
            knowledge in artificial intelligence and machine learning technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Educational Timeline</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-chart-3 opacity-30"></div>

                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div
                      key={edu.id}
                      className={`relative transition-all duration-1000 delay-${(index + 1) * 200} ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-lg z-10">
                        <div
                          className={`w-2 h-2 rounded-full ${edu.bgColor} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                        ></div>
                      </div>

                      {/* Education Card */}
                      <div className="ml-16">
                        <Card className="glass-strong border-0 hover:scale-105 transition-all duration-300">
                          <CardContent className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg ${edu.bgColor}`}>
                                  <edu.icon className={`h-5 w-5 ${edu.color}`} />
                                </div>
                                <div>
                                  <Badge
                                    variant={edu.status === "Expected Graduation" ? "default" : "secondary"}
                                    className="mb-2"
                                  >
                                    {edu.status}
                                  </Badge>
                                  <h4 className="text-lg font-serif font-bold text-foreground">{edu.degree}</h4>
                                  <p className="text-primary font-medium">{edu.institution}</p>
                                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                                  <Calendar className="h-4 w-4" />
                                  <span className="text-sm">{edu.year}</span>
                                </div>
                                <Badge variant="outline" className="glass">
                                  GPA: {edu.gpa}
                                </Badge>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div>
                                <h5 className="font-semibold text-foreground mb-2">Focus Areas</h5>
                                <div className="flex flex-wrap gap-2">
                                  {edu.focus.map((area) => (
                                    <Badge key={area} variant="outline" className="glass text-xs">
                                      {area}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h5 className="font-semibold text-foreground mb-2">Key Achievements</h5>
                                <ul className="space-y-1">
                                  {edu.achievements.map((achievement, idx) => (
                                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Additional Learning */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={cert.title}
                    className={`glass hover:glass-strong transition-all duration-300 delay-${index * 100} border-0`}
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                          <p className="text-xs text-muted-foreground">{cert.provider}</p>
                        </div>
                        <Badge variant={cert.status === "Completed" ? "default" : "secondary"} className="text-xs">
                          {cert.status}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">{cert.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Academic Stats */}
            <div className="glass-strong rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-serif font-bold text-foreground">Academic Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 glass rounded-lg">
                  <div className="text-2xl font-bold text-primary">3.8</div>
                  <div className="text-xs text-muted-foreground">Current CGPA</div>
                </div>
                <div className="text-center p-3 glass rounded-lg">
                  <div className="text-2xl font-bold text-accent">5.00</div>
                  <div className="text-xs text-muted-foreground">HSC GPA</div>
                </div>
                <div className="text-center p-3 glass rounded-lg">
                  <div className="text-2xl font-bold text-chart-3">4+</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center p-3 glass rounded-lg">
                  <div className="text-2xl font-bold text-chart-2">2025</div>
                  <div className="text-xs text-muted-foreground">Graduation</div>
                </div>
              </div>
            </div>

            {/* Skills Development */}
            <div className="glass-strong rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-serif font-bold text-foreground">Continuous Learning</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Research Papers</span>
                  <Badge variant="outline" className="glass text-xs">
                    In Progress
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Conference Participation</span>
                  <Badge variant="outline" className="glass text-xs">
                    Planned
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">Open Source Contributions</span>
                  <Badge variant="outline" className="glass text-xs">
                    Active
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
