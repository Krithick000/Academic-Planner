import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingCallout from '../components/PricingCallout';
import ComingSoonSection from '../components/ComingSoonSection';
import HumanTouchSection from '../components/HumanTouchSection';
import ReminderSection from '../components/ReminderSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import WaitlistModal from '../components/WaitlistModal';
import { Toaster } from '../components/ui/toaster';
import { useState } from 'react';

const LandingPage = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const handleJoinWaitlist = () => {
    setShowWaitlistModal(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation onJoinWaitlist={handleJoinWaitlist} />
      <HeroSection onJoinWaitlist={handleJoinWaitlist} />
      <IntroSection />
      <FeaturesSection />
      <PricingCallout />
      <ComingSoonSection />
      <HumanTouchSection />
      <ReminderSection />
      <FinalCTA onJoinWaitlist={handleJoinWaitlist} />
      <Footer />
      <WaitlistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />
    </div>
  );
};

export default LandingPage;