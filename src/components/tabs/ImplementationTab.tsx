
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ImplementationTab = () => {
  const phases = [
    {
      phase: "Phase 1: Preparation",
      color: "blue",
      items: [
        "Procure second FortiGate 201G with matching specifications",
        "Verify FortiCare Premium and FortiGuard UTP licensing",
        "Set up lab testing environment if available",
        "Schedule non-work hours downtime (15-20 minutes per device)",
        "Download target firmware version from Fortinet support",
        "Rack-mount second FortiGate and connect power"
      ]
    },
    {
      phase: "Phase 2: HA Configuration",
      color: "green",
      items: [
        "Connect HA heartbeat link using dedicated port (port 2)",
        "Connect network interfaces with identical port mappings",
        "Configure primary FortiGate HA settings (Priority: 200)",
        "Configure secondary FortiGate HA settings (Priority: 100)",
        "Verify configuration synchronization between devices",
        "Check HA status and ensure proper cluster formation"
      ]
    },
    {
      phase: "Phase 3: Testing",
      color: "orange",
      items: [
        "Simulate primary FortiGate failure (power off/interface disable)",
        "Verify secondary takeover within seconds",
        "Test network connectivity from client devices",
        "Validate critical services (VPN, SD-WAN, firewall policies)",
        "Confirm FortiGuard services functionality",
        "Verify configuration backup is current"
      ]
    },
    {
      phase: "Phase 4: Deployment",
      color: "purple",
      items: [
        "Deploy HA cluster to production during scheduled downtime",
        "Monitor HA status for synchronization",
        "Check system health, CPU, memory, and session counts",
        "Verify FortiGuard service subscriptions",
        "Update network documentation with HA configuration",
        "Implement monitoring and alerting for HA status"
      ]
    }
  ];

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Implementation Phases</CardTitle>
        <CardDescription>Step-by-step upgrade process from single to HA configuration</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="border rounded-lg p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Badge 
                variant="outline" 
                className={`px-3 py-1 ${
                  phase.color === 'blue' ? 'border-blue-500 text-blue-700 dark:text-blue-300' :
                  phase.color === 'green' ? 'border-green-500 text-green-700 dark:text-green-300' :
                  phase.color === 'orange' ? 'border-orange-500 text-orange-700 dark:text-orange-300' :
                  'border-purple-500 text-purple-700 dark:text-purple-300'
                }`}
              >
                {phase.phase}
              </Badge>
            </div>
            <div className="grid gap-2">
              {phase.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start space-x-3 p-2 hover:bg-muted/30 rounded transition-colors">
                  <Badge variant="secondary" className="text-xs mt-1 min-w-[24px] justify-center">
                    {itemIndex + 1}
                  </Badge>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ImplementationTab;
