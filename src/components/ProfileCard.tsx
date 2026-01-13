import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileCardProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  image: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

const ProfileCard = ({
  name,
  title,
  email,
  phone,
  location,
  image,
  skills,
  linkedin,
  github
}: ProfileCardProps) => {
  return (
    <Card className="bg-card/80 backdrop-blur-xl border-border/50 shadow-2xl max-w-md w-full animate-fade-in">
      <CardContent className="p-8">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">{name}</h2>
          <p className="text-primary font-medium">{title}</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">{email}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">{phone}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-primary/20 transition-colors"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
          )}
        </div>

        {/* CTA Button */}
        <Button asChild className="w-full group">
          <Link to="/portfolio" className="flex items-center justify-center gap-2">
            <span>View Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
