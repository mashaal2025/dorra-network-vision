
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, Book, FileText, Link } from "lucide-react";
import { useTheme } from "next-themes";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const { theme, setTheme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "FortiGate High Availability Implementation",
      description: "Comprehensive implementation plan for upgrading from single FortiGate 201G to HA configuration with detailed network documentation.",
      tags: ["Network Security", "FortiGate", "High Availability", "Enterprise"],
      type: "Implementation Plan",
      status: "Complete",
      link: "/fortigate-ha"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Project Library
                </h1>
                <p className="text-sm text-muted-foreground">Network & Security Documentation</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden md:flex"
              >
                <a 
                  href="https://drive.google.com/drive/folders/your-drive-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Link className="w-4 h-4" />
                  <span>Dorra Group Docs</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="transition-all duration-300 hover:scale-105"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Network & Security
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Project Documentation
          </h3>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive documentation and implementation plans for network infrastructure, 
            security solutions, and enterprise-grade configurations for Dorra Group.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              FortiGate Solutions
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              High Availability
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Network Security
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Enterprise Infrastructure
            </Badge>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                  <Badge 
                    variant={project.status === "Complete" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs px-2 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  asChild 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <RouterLink to={project.link} className="flex items-center justify-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>View Documentation</span>
                  </RouterLink>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Drive Link Section */}
      <section className="container mx-auto px-6 pb-16">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-dashed border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Link className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Complete Documentation Archive</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access the complete collection of network and security documentation, 
              implementation guides, and configuration files for Dorra Group infrastructure.
            </p>
            <Button size="lg" asChild className="animate-bounce">
              <a 
                href="https://drive.google.com/drive/folders/your-drive-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Link className="w-5 h-5" />
                <span>Access Drive Documentation</span>
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Dorra Group Network & Security Documentation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
