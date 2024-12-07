import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Capabilities } from "@/components/Capabilities";
import { Requirements } from "@/components/Requirements";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Capabilities />
      <Requirements />
      <CTA />
    </div>
  );
};

export default Index;