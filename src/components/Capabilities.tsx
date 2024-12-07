import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "Autonomous Problem Solving",
  "Information Gathering",
  "Development & Execution",
  "Adaptive Intelligence",
  "Web Scraping",
  "GitHub Integration",
  "Local Model Inference",
  "Dynamic Dependency Management",
];

export const Capabilities = () => {
  return (
    <div className="bg-gradient-to-br from-gia-purple/5 via-gia-blue/5 to-gia-teal/5 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircle2 className="h-6 w-6 text-gia-teal flex-shrink-0" />
              <span className="text-gray-800">{capability}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};