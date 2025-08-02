import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const FinalCTA = ({ onJoinWaitlist }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Be the First to Try It
        </h2>
        <Button 
          onClick={onJoinWaitlist}
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 text-xl px-12 py-6 mb-6 group"
        >
          Join the Waitlist
          <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
        </Button>
        <p className="text-lg text-muted-foreground">
          We'll ping you the second it's ready.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;