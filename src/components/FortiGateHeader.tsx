
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, Link } from "lucide-react";
import { useTheme } from "next-themes";
import { Link as RouterLink } from "react-router-dom";

const FortiGateHeader = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <RouterLink to="/">← Back to Library</RouterLink>
            </Button>
            <div>
              <h1 className="text-xl font-bold">FortiGate HA Implementation</h1>
              <p className="text-sm text-muted-foreground">High Availability Configuration Plan</p>
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
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FortiGateHeader;
