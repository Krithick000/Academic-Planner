import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <p className="text-xl md:text-2xl text-foreground mb-4 leading-relaxed">
          You don't need another bloated app with 97 features you'll never touch.
        </p>
        <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed">
          You need one tool that just gets the job done.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;