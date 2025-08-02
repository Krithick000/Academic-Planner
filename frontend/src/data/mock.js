// Mock data for TeachPlan website
// This file contains all mock data used in the frontend-only implementation

export const mockWaitlistData = {
  submissions: [],
  
  // Mock function to simulate API call for joining waitlist
  joinWaitlist: async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const submission = {
          id: Date.now().toString(),
          name: userData.name,
          email: userData.email,
          timestamp: new Date().toISOString(),
          status: 'confirmed'
        };
        
        mockWaitlistData.submissions.push(submission);
        
        resolve({
          success: true,
          message: 'Successfully joined the waitlist!',
          data: submission
        });
      }, 1000); // Simulate 1 second API delay
    });
  },
  
  // Mock function to get waitlist count
  getWaitlistCount: () => {
    return mockWaitlistData.submissions.length;
  }
};

export const siteContent = {
  hero: {
    headline: "Finally, a Planning Tool That Gets You",
    subheading: "Built for teachers. Not techies.",
    cta: "Join the Waitlist"
  },
  
  intro: {
    text1: "You don't need another bloated app with 97 features you'll never touch.",
    text2: "You need one tool that just gets the job done."
  },
  
  features: [
    {
      title: "Creates Annual Plans",
      description: "Not some recycled templates, but actual syllabus mapped to your school calendar."
    },
    {
      title: "Adapts to Real-life Schedules",
      description: "Missed a few classes? Had a holiday? It adjusts. You don't have to start over."
    },
    {
      title: "Learns from Your Edits",
      description: "Tweak a plan once, and it remembers next time."
    },
    {
      title: "Download in Your School's Letterpad",
      description: "Yes, including your table formats, fonts, and even that logo you had to fight the printer for."
    },
    {
      title: "Handles Multiple Classes and Subjects",
      description: "Because we know you wear more hats than your timetable suggests."
    }
  ],
  
  pricing: {
    title: "Free to Start. Easy to Upgrade.",
    subtitle: "We're not here to drain your wallet.",
    description: "Just enough options to get serious work done, and more if you want to go pro — without breaking the bank."
  },
  
  comingSoon: [
    {
      title: "Monthly & Weekly Plans",
      description: "Detailed planning at every level"
    },
    {
      title: "Smart Formatting with Adaptive Calendars",
      description: "Beautiful layouts that adjust automatically"
    },
    {
      title: "Offline + Local Usage",
      description: "With your own API key for complete privacy"
    },
    {
      title: "Fully Customizable Planning Structures",
      description: "Adapt to any teaching methodology"
    },
    {
      title: "Theme Support",
      description: "For multiple boards or curriculums"
    }
  ]
};

// Mock analytics data (for potential admin dashboard)
export const mockAnalytics = {
  totalSignups: 0,
  dailySignups: [],
  
  recordSignup: (userData) => {
    mockAnalytics.totalSignups += 1;
    
    const today = new Date().toISOString().split('T')[0];
    const existingDay = mockAnalytics.dailySignups.find(day => day.date === today);
    
    if (existingDay) {
      existingDay.count += 1;
    } else {
      mockAnalytics.dailySignups.push({
        date: today,
        count: 1
      });
    }
  }
};