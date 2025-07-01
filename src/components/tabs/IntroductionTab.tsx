
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

const IntroductionTab = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="w-5 h-5" />
          <span>Introduction</span>
        </CardTitle>
        <CardDescription>
          Understanding FortiGate High Availability heartbeat mechanisms
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Heartbeat Timing Configuration</h3>
          <div className="bg-muted/50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`config system ha
    set hb-interval <integer>
    set hb-interval-in-milliseconds {100 | 10}
    set hb-lost-threshold <integer>
end`}
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Default Settings</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Heartbeat interval: 2 × 100ms</li>
                <li>• Failure threshold: 20 missed beats</li>
                <li>• Total failure time: 4 seconds</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Key Benefits</h4>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Sub-second failover possible</li>
                <li>• Bidirectional monitoring</li>
                <li>• Configurable sensitivity</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Important Considerations</h3>
          <div className="grid gap-3">
            {[
              "FortiGate HA sends heartbeat packets every 2 × 100ms by default",
              "A unit is considered dead after 20 missed heartbeats (4 seconds)",
              "Faster failover (sub-second) can be achieved by reducing interval and threshold",
              "Both primary and subordinate units monitor each other via heartbeats",
              "Shorter intervals improve detection but increase bandwidth usage",
              "Avoid using heartbeat ports for regular traffic to prevent congestion"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                <Badge variant="outline" className="text-xs mt-0.5">{index + 1}</Badge>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntroductionTab;
