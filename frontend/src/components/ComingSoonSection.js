import React from 'react';
import { Card, CardContent } from './ui/card';
import { CalendarDays, Palette, Wifi, Settings, Layers } from 'lucide-react';

const ComingSoonSection = () => {
  const comingSoonFeatures = [
    {
      icon: CalendarDays,
      title: "Monthly & Weekly Plans",
      description: "Detailed planning at every level"
    },
    {
      icon: Palette,
      title: "Smart Formatting with Adaptive Calendars",
      description: "Beautiful layouts that adjust automatically"
    },
    {
      icon: Wifi,
      title: "Offline + Local Usage",
      description: "With your own API key for complete privacy"
    },
    {
      icon: Settings,
      title: "Fully Customizable Planning Structures",
      description: "Adapt to any teaching methodology"
    },
    {
      icon: Layers,
      title: "Theme Support",
      description: "For multiple boards or curriculums"
    }
  ];

  return (
    <section id="coming-soon" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More powerful features to make your teaching life even easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-border bg-background/30 backdrop-blur-sm animate-fade-in-up opacity-75"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <feature.icon className="h-7 w-7 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;