
import { Badge } from "@/components/ui/badge";

const FortiGateTitleSection = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <Badge variant="outline" className="mb-4">Implementation Plan</Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        FortiGate High Availability
      </h1>
      <p className="text-xl text-muted-foreground mb-6">
        Complete implementation plan for upgrading to HA configuration
      </p>
      
      {/* Intro Image */}
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
          alt="Network Operations Center with Multiple Displays"
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
        <p className="text-sm text-muted-foreground mt-2">Network Operations Center - High Availability Infrastructure</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        <Badge variant="secondary">FortiGate 201G</Badge>
        <Badge variant="secondary">Active-Passive HA</Badge>
        <Badge variant="secondary">Session Pickup</Badge>
        <Badge variant="secondary">Dorra Group</Badge>
      </div>
    </div>
  );
};

export default FortiGateTitleSection;
