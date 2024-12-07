import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-gia-purple/10 via-gia-blue/10 to-gia-teal/10 animate-gradient">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gia-purple via-gia-blue to-gia-teal bg-clip-text text-transparent">
        Meet Gia
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-8">
        A universal, self-orchestrating AI assistant designed to understand, plan, and execute complex tasks across any domain.
      </p>
      <Button className="bg-gia-purple hover:bg-gia-blue transition-all duration-300">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};