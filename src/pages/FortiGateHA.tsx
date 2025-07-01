
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FortiGateHeader from "@/components/FortiGateHeader";
import FortiGateTitleSection from "@/components/FortiGateTitleSection";
import IntroductionTab from "@/components/tabs/IntroductionTab";
import FeaturesTab from "@/components/tabs/FeaturesTab";
import ImplementationTab from "@/components/tabs/ImplementationTab";
import ConfigurationTab from "@/components/tabs/ConfigurationTab";
import DiagramsTab from "@/components/tabs/DiagramsTab";
import DriveLink from "@/components/DriveLink";
import ScrollToTop from "@/components/ScrollToTop";

const FortiGateHA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <FortiGateHeader />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <FortiGateTitleSection />

          {/* Tabs Navigation */}
          <Tabs defaultValue="intro" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8">
              <TabsTrigger value="intro">Introduction</TabsTrigger>
              <TabsTrigger value="features">HA Features</TabsTrigger>
              <TabsTrigger value="plan">Implementation</TabsTrigger>
              <TabsTrigger value="config">Configuration</TabsTrigger>
              <TabsTrigger value="diagrams">Diagrams</TabsTrigger>
            </TabsList>

            <TabsContent value="intro" className="space-y-6">
              <IntroductionTab />
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <FeaturesTab />
            </TabsContent>

            <TabsContent value="plan" className="space-y-6">
              <ImplementationTab />
            </TabsContent>

            <TabsContent value="config" className="space-y-6">
              <ConfigurationTab />
            </TabsContent>

            <TabsContent value="diagrams" className="space-y-6">
              <DiagramsTab />
            </TabsContent>
          </Tabs>

          <DriveLink />
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default FortiGateHA;
