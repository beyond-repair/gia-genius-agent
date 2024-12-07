import { Server, Shield, Cog, Lock } from "lucide-react";

const requirements = [
  {
    icon: Server,
    title: "Local AI Model Server",
    description: "Dedicated server for running local AI models",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Secure, private information processing",
  },
  {
    icon: Cog,
    title: "Automation",
    description: "Headless browser and task automation",
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "Local data processing and storage",
  },
];

export const Requirements = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((req, index) => (
            <div key={index} className="text-center">
              <req.icon className="h-12 w-12 mx-auto mb-4 text-gia-blue" />
              <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
              <p className="text-gray-600">{req.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};