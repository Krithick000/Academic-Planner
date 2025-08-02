import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">TeachPlan</h3>
          <p className="text-muted-foreground mb-4">
            Built for teachers. Not techies.
          </p>
          <div className="text-sm text-muted-foreground">
            © 2025 TeachPlan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;