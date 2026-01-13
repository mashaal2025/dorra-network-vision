import BinaryRain from "@/components/BinaryRain";
import ProfileCard from "@/components/ProfileCard";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Landing = () => {
  const { theme, setTheme } = useTheme();

  // Replace these with your actual information
  const profileData = {
    name: "Your Name",
    title: "Network & Security Engineer",
    email: "your.email@example.com",
    phone: "+20 123 456 7890",
    location: "Cairo, Egypt",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    skills: ["FortiGate", "Network Security", "High Availability", "Firewall"],
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile"
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Binary Rain Background */}
      <BinaryRain />

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-background/80 backdrop-blur-sm"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center md:justify-start px-6 md:px-20">
        <ProfileCard {...profileData} />
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-5 pointer-events-none" />
    </div>
  );
};

export default Landing;
