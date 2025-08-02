import React from 'react';
import { Card, CardContent } from './ui/card';
import { DollarSign } from 'lucide-react';

const PricingCallout = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-6">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free to Start. Easy to Upgrade.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              We're not here to drain your wallet.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Just enough options to get serious work done, and more if you want to go pro — without breaking the bank.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingCallout;