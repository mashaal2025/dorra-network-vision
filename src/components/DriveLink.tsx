
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";

const DriveLink = () => {
  return (
    <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-dashed border-primary/20">
      <CardContent className="p-6 text-center">
        <h3 className="text-lg font-bold mb-2">Complete Documentation</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Access network diagrams, configuration files, and additional documentation
        </p>
        <Button asChild>
          <a 
            href="https://drive.google.com/drive/folders/your-drive-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <Link className="w-4 h-4" />
            <span>Access Dorra Group Documentation</span>
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DriveLink;
