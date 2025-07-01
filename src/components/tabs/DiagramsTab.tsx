
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Image } from "lucide-react";

const DiagramsTab = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Image className="w-5 h-5" />
          <span>Network Diagrams</span>
        </CardTitle>
        <CardDescription>
          Visual representations of the FortiGate HA implementation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Diagram 1 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Network Architecture Overview</h3>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Network Circuit Board Architecture"
              className="w-full rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Complete network infrastructure showing FortiGate HA cluster connectivity and data flow paths.
          </p>
        </div>

        <Separator />

        {/* Diagram 2 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">HA Configuration Flow</h3>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Configuration Code Display"
              className="w-full rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Detailed configuration parameters and command structure for implementing FortiGate HA setup.
          </p>
        </div>

        <Separator />

        {/* Diagram 3 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Monitoring & Management Interface</h3>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="Programming and Monitoring Interface"
              className="w-full rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Management interface showing HA status monitoring, health checks, and administrative controls.
          </p>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Diagram Notes</h4>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• All diagrams represent the complete HA implementation for Dorra Group</li>
            <li>• Network topology includes redundant paths and failover mechanisms</li>
            <li>• Configuration snippets show actual FortiGate CLI commands</li>
            <li>• Monitoring interfaces provide real-time HA cluster status</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagramsTab;
