
import React from 'react';
import { cn } from "@/lib/utils";

const OurStory = () => {
  const timelineEvents = [
    {
      date: "June 2019",
      title: "How We Met",
      description: "We first met at a mutual friend's birthday party. Alex spilled his drink on Jane's new shoes, and the rest is history."
    },
    {
      date: "December 2020",
      title: "Our First Date",
      description: "We went to a small Italian restaurant downtown. We talked for hours and knew this was something special."
    },
    {
      date: "August 2022",
      title: "Moving In Together",
      description: "After two years of dating, we decided to take the next step and move in together with our cat, Milo."
    },
    {
      date: "February 2023",
      title: "The Proposal",
      description: "During a hike to our favorite lookout point, Alex got down on one knee and asked Jane to spend forever with him."
    }
  ];

  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Story</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center mb-12 text-slate-600">
            Every love story is beautiful, but ours is our favorite. Here's how our journey began.
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-wedding-gold/30" />
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={cn(
                  "relative mb-16 last:mb-0 flex",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                {/* Circle on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-wedding-gold z-10" />
                
                {/* Content */}
                <div className={cn(
                  "w-5/12",
                  index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                )}>
                  <div className="animate-fade-in">
                    <p className="font-sans text-sm text-wedding-darkSage uppercase tracking-wider mb-1">
                      {event.date}
                    </p>
                    <h3 className="font-serif text-xl mb-2">{event.title}</h3>
                    <p className="text-slate-600">{event.description}</p>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
