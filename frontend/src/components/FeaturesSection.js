import React from 'react';
import { Card, CardContent } from './ui/card';
import { Calendar, RefreshCw, Brain, Download, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Creates Annual Plans",
      description: "Not some recycled templates, but actual syllabus mapped to your school calendar."
    },
    {
      icon: RefreshCw,
      title: "Adapts to Real-life Schedules",
      description: "Missed a few classes? Had a holiday? It adjusts. You don't have to start over."
    },
    {
      icon: Brain,
      title: "Learns from Your Edits",
      description: "Tweak a plan once, and it remembers next time."
    },
    {
      icon: Download,
      title: "Download in Your School's Letterpad",
      description: "Yes, including your table formats, fonts, and even that logo you had to fight the printer for."
    },
    {
      icon: Users,
      title: "Handles Multiple Classes and Subjects",
      description: "Because we know you wear more hats than your timetable suggests."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features That Actually Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with real teaching scenarios in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border bg-background/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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

export default FeaturesSection;