import React from 'react';
import { Card, CardContent } from './ui/card';
import { Heart, ArrowRight } from 'lucide-react';

const HumanTouchSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-background border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-6">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built With Teachers, For Teachers
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              No fluff. No crash course required.
            </p>
            <div className="flex items-center justify-center space-x-4 text-base md:text-lg text-foreground">
              <span>Log in</span>
              <ArrowRight className="h-5 w-5 text-primary" />
              <span>Choose subject</span>
              <ArrowRight className="h-5 w-5 text-primary" />
              <span>Get plans</span>
            </div>
            <p className="text-base md:text-lg text-primary font-medium mt-4">
              It's that smooth.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HumanTouchSection;