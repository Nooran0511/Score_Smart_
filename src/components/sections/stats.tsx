import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';

const Stats = () => {
  const statsData = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "100+",
      label: "Students Trained",
      delay: "0ms"
    },
    {
      icon: <Star className="h-6 w-6" />,
      value: "85%",
      label: "Band 7+ Achievers",
      delay: "100ms"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      value: "4-6 Weeks",
      label: "Structured Plan",
      delay: "200ms"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 px-4 md:px-0">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {statsData.map((stat, index) => (
          <div 
            key={index}
            className="group"
            style={{ transitionDelay: stat.delay }}
          >
            <div className="flex flex-col items-center p-8 rounded-2xl bg-white border border-[#E2E8F0]/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="h-12 w-12 rounded-full bg-[#4F46E5]/10 flex items-center justify-center mb-4 text-[#4F46E5] group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-[#0F172A] mb-1">
                <span>{stat.value}</span>
              </h3>
              <p className="text-[#64748B] font-medium text-center">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;