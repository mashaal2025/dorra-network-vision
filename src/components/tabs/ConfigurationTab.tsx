
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ConfigurationTab = () => {
  return (
    <div className="grid gap-6">
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Primary FortiGate Configuration</CardTitle>
          <CardDescription>HA settings for the primary device (higher priority)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`HA Configuration - Primary FortiGate:
• Mode: Active-Passive
• Device Priority: 200 (higher priority)
• Group ID: 0
• Group Name: FortiHACluster
• Password: Dorra@5567
• Session Pickup: Enabled
• Monitor Interfaces: Inside-PO, port1, port2, Fort-VLANs (port3)
• Heartbeat Interfaces: port10 (ha), priority 128
• Management Interface Reservation: port11
  - Gateway: 192.168.10.1
  - Destination Subnet: 0.0.0.0`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <CardHeader>
          <CardTitle>Secondary FortiGate Configuration</CardTitle>
          <CardDescription>HA settings for the secondary device (lower priority)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`HA Configuration - Secondary FortiGate:
• Mode: Active-Passive
• Device Priority: 100 (lower priority)
• Group ID: 0
• Group Name: FortiHACluster
• Password: Dorra@5567
• Session Pickup: Enabled
• Monitor Interfaces: Inside-PO, port1, port2, Fort-VLANs (port3)
• Heartbeat Interfaces: port10 (ha), priority 256
• Management Interface Reservation: port11
  - Gateway: 192.168.10.1
  - Destination Subnet: 0.0.0.0`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="text-yellow-800 dark:text-yellow-200">Important Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <Badge variant="destructive" className="text-xs mt-0.5">!</Badge>
              <span><strong>Configuration Loss:</strong> Always back up configurations before upgrades or changes.</span>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="destructive" className="text-xs mt-0.5">!</Badge>
              <span><strong>HA Sync Failure:</strong> Ensure identical firmware versions and verify heartbeat connectivity.</span>
            </div>
            <div className="flex items-start space-x-2">
              <Badge variant="destructive" className="text-xs mt-0.5">!</Badge>
              <span><strong>Rollback Plan:</strong> Keep original configuration backup ready for emergency rollback.</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfigurationTab;
