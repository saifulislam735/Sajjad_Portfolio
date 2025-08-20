"use client"
import { useEffect, useState } from "react"
import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form processing
    setTimeout(() => {
      // Create mailto link with form data
      const subject = formData.subject || "Portfolio Contact"
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      const mailtoLink = `mailto:shsajid3012@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open email client
      window.location.href = mailtoLink

      setSubmitStatus("success")
      setIsSubmitting(false)

      // Reset form after success
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setSubmitStatus("idle")
      }, 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shsajid3012@gmail.com",
      href: "mailto:shsajid3012@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1924 337712",
      href: "tel:+8801924337712",
      color: "text-accent",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
      color: "text-chart-3",
    },
  ]

  const isFormValid = formData.name && formData.email && formData.message

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Badge variant="outline" className="glass mb-4 px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
            Let's <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, innovative projects, and collaborations in AI,
            machine learning, and computer vision. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="glass-strong border-0">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-serif font-bold text-foreground">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glass border-border/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="glass border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full glass-strong hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Opening email client...
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="text-center p-4 glass rounded-lg">
                      <p className="text-sm text-accent">
                        Your email client should open with the message. If not, please email me directly at{" "}
                        <a href="mailto:shsajid3012@gmail.com" className="underline">
                          shsajid3012@gmail.com
                        </a>
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={info.label}
                    className={`glass hover:glass-strong transition-all duration-300 delay-${index * 100} border-0`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-muted/20`}>
                          <info.icon className={`h-5 w-5 ${info.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{info.label}</h4>
                          {info.href !== "#" ? (
                            <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="glass-strong border-0">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                  <h3 className="text-lg font-serif font-bold text-foreground">Availability Status</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Full-time Opportunities</span>
                    <Badge className="bg-accent text-accent-foreground">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Freelance Projects</span>
                    <Badge className="bg-primary text-primary-foreground">Open</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Research Collaboration</span>
                    <Badge className="bg-chart-3 text-white">Interested</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Expected graduation: <span className="font-medium text-foreground">2025</span>
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="glass-strong border-0">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-serif font-bold text-foreground">Response Time</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 glass rounded-lg">
                    <div className="text-2xl font-bold text-primary">24h</div>
                    <div className="text-xs text-muted-foreground">Email Response</div>
                  </div>
                  <div className="text-center p-3 glass rounded-lg">
                    <div className="text-2xl font-bold text-accent">Same Day</div>
                    <div className="text-xs text-muted-foreground">Urgent Inquiries</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your
                  subject line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
