'use client';

import SocialLinks from './SocialLinks';
import TypingAnimation from './TypingAnimation';

export default function Hero() {
  const skills = [
    { name: 'InVision', color: 'text-pink-500' },
    { name: 'Sketch', color: 'text-yellow-500' },
    { name: 'Figma', color: 'text-blue-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">
                WELCOME TO MY PORTFOLIO
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m <span className="text-primary">Nicolaas</span>
                <br />
                <span className="text-primary">van der Walt</span>
                <br />
                <span className="block mt-2">
                  <TypingAnimation 
                    titles={[
                      'a Finance Student.',
                      'a Quant Trader.',
                      'a Computing Major.',
                      'a Strategy Coder.',
                      'a Market Analyst.',
                    ]} 
                  />
                </span>
              </h1>

              <p className="text-gray-400 mt-6 max-w-lg leading-relaxed text-sm md:text-base">
                I&apos;m a student exploring financial markets through hands-on trading and strategy development.
                I create and test strategies using technical indicators, network-based models, and market data analysis,
                focusing on systematic approaches that balance risk and opportunity.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 pt-2">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  FIND ME
                </p>
                <SocialLinks />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                  EXPLORE
                </p>
                <div className="flex gap-4">
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
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src="/avatar.png"
                  alt="Nicolaas van der Walt"
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