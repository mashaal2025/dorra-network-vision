
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturesTab = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Session Pickup</CardTitle>
          <CardDescription>Seamless session continuity during failover</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">What is Session Pickup?</h4>
            <p className="text-sm text-muted-foreground">
              The ability of a secondary unit to resume active sessions after failover 
              without disconnecting users.
            </p>
          </div>
          
          <div className="space-y-3">
            <div>
              <h5 className="font-medium text-green-600 dark:text-green-400">Benefits:</h5>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• No session drops during failover</li>
                <li>• Smooth user experience for VoIP, VPNs</li>
                <li>• Business continuity maintained</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-orange-600 dark:text-orange-400">Considerations:</h5>
              <ul className="text-sm text-muted-foreground ml-4 space-y-1">
                <li>• Requires more CPU/RAM resources</li>
                <li>• Constant session table synchronization</li>
                <li>• Works best in Active-Passive mode</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <CardHeader>
          <CardTitle>Management Interface Reservation</CardTitle>
          <CardDescription>Independent access to both HA units</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Key Benefits</h4>
            <p className="text-sm text-muted-foreground">
              Access both HA units independently, even when one is passive.
            </p>
          </div>
          
          <div>
            <h5 className="font-medium mb-2">Use Cases:</h5>
            <div className="grid grid-cols-2 gap-2">
              <Badge variant="outline" className="justify-center">Remote SSH</Badge>
              <Badge variant="outline" className="justify-center">GUI Access</Badge>
              <Badge variant="outline" className="justify-center">SNMP Monitoring</Badge>
              <Badge variant="outline" className="justify-center">Troubleshooting</Badge>
            </div>
          </div>
          
          <div className="bg-muted/50 p-3 rounded-lg">
            <p className="text-sm font-medium">Result:</p>
            <p className="text-sm text-muted-foreground">
              Each HA unit will be individually accessible via port11 using unique management IPs.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesTab;
