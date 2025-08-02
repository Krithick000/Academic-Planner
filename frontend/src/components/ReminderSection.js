import React from 'react';
import { Card, CardContent } from './ui/card';
import { MessageCircle } from 'lucide-react';

const ReminderSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 animate-fade-in-up">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="mb-6">
              <MessageCircle className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              WhatsApp Reminders? Of Course
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Because email's still on vacation.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReminderSection;