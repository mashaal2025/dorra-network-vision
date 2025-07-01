
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun, ArrowUp, Link, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import { Link as RouterLink } from "react-router-dom";

const FortiGateHA = () => {
  const { theme, setTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
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

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4">Implementation Plan</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FortiGate High Availability
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Complete implementation plan for upgrading to HA configuration
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary">FortiGate 201G</Badge>
              <Badge variant="secondary">Active-Passive HA</Badge>
              <Badge variant="secondary">Session Pickup</Badge>
              <Badge variant="secondary">Dorra Group</Badge>
            </div>
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="intro" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="intro">Introduction</TabsTrigger>
              <TabsTrigger value="features">HA Features</TabsTrigger>
              <TabsTrigger value="plan">Implementation</TabsTrigger>
              <TabsTrigger value="config">Configuration</TabsTrigger>
            </TabsList>

            {/* Introduction Tab */}
            <TabsContent value="intro" className="space-y-6">
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
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-6">
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
            </TabsContent>

            {/* Implementation Plan Tab */}
            <TabsContent value="plan" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Implementation Phases</CardTitle>
                  <CardDescription>Step-by-step upgrade process from single to HA configuration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
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
                  ].map((phase, index) => (
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
            </TabsContent>

            {/* Configuration Tab */}
            <TabsContent value="config" className="space-y-6">
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
            </TabsContent>
          </Tabs>

          {/* Drive Link Card */}
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
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default FortiGateHA;
