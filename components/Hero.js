'use client';

import SocialLinks from './SocialLinks';
import { ArrowUp } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

export default function Hero() {
  const skills = [
    { name: 'InVision', color: 'text-pink-500' },
    { name: 'Sketch', color: 'text-yellow-500' },
    { name: 'Figma', color: 'text-blue-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
                WELCOME TO MY PORTFOLIO
              </p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m <span className="text-primary">Nicolaas</span> <br />
                <span className="text-primary"> van der Walt</span>
              <br />
                <TypingAnimation 
                  titles={[
                  'a Finance Student.',
                  'a Quant Trader.',
                  'a Computing Major.',
                  'a Strategy Coder.',
                  'a Market Analyst.',
                ]} 
              />
              </h1>

              <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
                I’m a student exploring financial markets through hands-on trading and strategy development.
                I create and test strategies using technical indicators, network-based models, and market data analysis,
                focusing on systematic approaches that balance risk and opportunity.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-8 pt-2">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  FIND ME
                </p>
                <SocialLinks />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  Random
                </p>
                <div className="flex gap-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 bg-gray-800/50 rounded flex items-center justify-center hover:bg-gray-700/50 transition-colors"
                    >
                      <span className={`text-2xl ${skill.color}`}>●</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden bg-linear-to-br from-gray-800 to-gray-900">
                {/* Replace with your actual image */}
                <img
                  src="/avatar.png"
                  alt="Jone Lee"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">👨‍💼</div>';
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}