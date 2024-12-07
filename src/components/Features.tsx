import { Brain, Code, Tool, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Universal Task Comprehension",
    description: "Understands and executes complex tasks across any domain",
    icon: Brain,
  },
  {
    title: "Dynamic Tool Creation",
    description: "Generates and deploys custom tools and agents as needed",
    icon: Tool,
  },
  {
    title: "Autonomous Workflow",
    description: "Self-orchestrates complex problem-solving workflows",
    icon: Workflow,
  },
  {
    title: "Local AI Integration",
    description: "Leverages local AI models for enhanced privacy and speed",
    icon: Code,
  },
];

export const Features = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <feature.icon className="h-12 w-12 text-gia-purple mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};