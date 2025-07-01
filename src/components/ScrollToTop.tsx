
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
      size="icon"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default ScrollToTop;
