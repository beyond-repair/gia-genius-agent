import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const CTA = () => {
  const handleTryGia = () => {
    toast.success("Thanks for your interest in Gia!");
    // Add your CTA action here
    window.open("https://docs.lovable.dev", "_blank");
  };

  return (
    <div className="bg-gia-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Experience the power of universal AI assistance with Gia
        </p>
        <Button 
          onClick={handleTryGia}
          className="bg-gia-teal hover:bg-gia-blue transition-all duration-300"
        >
          Try Gia Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};