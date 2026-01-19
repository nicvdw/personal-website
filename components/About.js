'use client';

import { Code, TrendingUp, Lightbulb, Target, GraduationCap } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Coding' },
    { number: '10K+', label: 'Lines of Code' },
    { number: '100%', label: 'Passion Driven' },
  ];

  const skills = [
    {
      category: 'Programming',
      items: ['Python', 'JavaScript', 'React', 'Next.js', 'Node.js', 'SQL']
    },
    {
      category: 'Trading & Finance',
      items: ['Algorithmic Trading', 'Backtesting', 'Risk Management', 'Technical Analysis', 'Portfolio Optimization']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git/GitHub', 'APIs', 'Pandas', 'NumPy', 'TradingView', 'Interactive Brokers']
    },
    {
      category: 'Data & Analytics',
      items: ['Data Visualization', 'Statistical Analysis', 'Machine Learning', 'Time Series Analysis']
    }
  ];

  const education = [
    {
      icon: Code,
      title: 'Computational Data Science',
      description: 'With a specialization specialization a finance a in quantitative finance and trading systems development. Focused on algorithms, data structures, and software engineering with a specialization in quantitative finance and trading systems development. Focused on algorithms, data structures, and software engineering with a specialization in quantitative finance and trading systems development.'
    },
    {
      icon: GraduationCap,
      title: 'Trading & Markets',
      description: 'Studied market microstructure, portfolio theory, and risk management. Built algorithmic trading systems and participated in trading competitions.'
    }
  ];

  return (
    <section id="about" className="min-h-screen pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Quantitative Trader & Developer
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I&apos;m a passionate developer and trader who discovered that the intersection of 
                programming and finance is where I thrive. What started as curiosity about market 
                patterns turned into a deep dive into algorithmic trading systems and quantitative analysis.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Currently, I&apos;m focused on building robust trading bots, backtesting frameworks, and 
                data-driven strategies that can perform in real market conditions. I believe the best 
                trading systems combine solid statistical foundations with clean, efficient code.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I&apos;m not coding or analyzing market data, you&apos;ll find me reading about market 
                microstructure, exploring new trading strategies, or contributing to open-source 
                projects. I&apos;m always open to connecting with fellow developers and traders who share 
                the same passion for markets and technology.
              </p>
            </div>


          {/* Download Resume Button */}
          <div className="pt-4">
              <a 
                href="/resume.pdf"
                download="Nicolaas-Resume.pdf"
                className="inline-flex items-center gap-2
                      bg-gradient-to-br from-blue-600 to-blue-800
                    text-white px-8 py-3 rounded
                      hover:bg-primary/90 transition-all
                    hover:from-blue-500 hover:to-blue-700
                      hover:scale-[1.02]
                      hover:shadow-lg hover:shadow-blue-500/25
                      active:scale-[0.98] group"
              >
                <svg 
                  className="w-5 h-5 group-hover:animate-bounce" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round"
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>


          {/* Right Column - Backtest Results */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-6">
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">TSLA</h3>
                <p className="text-blue-200 text-sm">Backtest Performance</p>
              </div>

              {/* Main Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-200 text-xs mb-1">Initial Value</p>
                  <p className="text-white text-xl font-bold">$1,000.00</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-blue-200 text-xs mb-1">Final Value</p>
                  <p className="text-white text-xl font-bold">$4,107.84</p>
                </div>
                <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-green-200 text-xs mb-1">Net Profit</p>
                  <p className="text-green-400 text-xl font-bold">$3,107.84</p>
                </div>
                <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-green-200 text-xs mb-1">Annualized Return</p>
                  <p className="text-green-400 text-xl font-bold">15.20%</p>
                </div>
              </div>

              {/* Performance Metrics Grid */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded p-3">
                    <p className="text-blue-200 text-xs mb-1">Profit Factor</p>
                    <p className="text-green-400 font-semibold">3.85</p>
                  </div>
                  <div className="bg-white/5 rounded p-3">
                    <p className="text-blue-200 text-xs mb-1">Max Drawdown</p>
                    <p className="text-red-400 font-semibold">-52.70%</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded p-3">
                    <p className="text-blue-200 text-xs mb-1">Sharpe Ratio</p>
                    <p className="text-white font-semibold">0.56</p>
                  </div>
                  <div className="bg-white/5 rounded p-3">
                    <p className="text-blue-200 text-xs mb-1">Win Rate</p>
                    <p className="text-green-400 font-semibold">70.00%</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded p-3">
                    <p className="text-blue-200 text-xs mb-1">Total Trades</p>
                    <p className="text-white font-semibold">10</p>
                  </div>
                  <div className="bg-white/5 rounded p-3">
                    <p className="text-blue-200 text-xs mb-1">Avg Holding Period</p>
                    <p className="text-white font-semibold">176.3 days</p>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-10 -right-10 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6 max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs text-gray-400">Active Trading Bots</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8">
            Skills & <span className="text-primary">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700/50 rounded text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Experience Timeline Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8">
            My <span className="text-primary">Journey</span>
          </h3>
          <div className="space-y-6">
            
            {/* Timeline Item 1 */}
            <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-primary/50 transition-all">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Quantitative Trading Researcher</h4>
                    <p className="text-primary text-sm font-medium">Self-Directed Projects</p>
                  </div>
                  <span className="text-sm text-gray-500">2023 - Present</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Developed and backtested multiple algorithmic trading strategies across various asset classes. 
                  Built custom backtesting frameworks and automated trading systems. Focused on risk management 
                  and statistical validation of trading signals.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-gray-700/50 rounded text-xs text-gray-300">Python</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded text-xs text-gray-300">Algorithmic Trading</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded text-xs text-gray-300">Data Analysis</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-primary/50 transition-all">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Full-Stack Developer</h4>
                    <p className="text-primary text-sm font-medium">Personal Projects</p>
                  </div>
                  <span className="text-sm text-gray-500">2022 - Present</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Built web applications for financial analysis and portfolio management. Created interactive 
                  dashboards for visualizing trading performance and market data. Integrated real-time data 
                  feeds and API connections to brokers.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-gray-700/50 rounded text-xs text-gray-300">React</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded text-xs text-gray-300">Next.js</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded text-xs text-gray-300">APIs</span>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-primary/50 transition-all">
                <div className="flex flex-wrap items-start justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">First Trading Algorithm</h4>
                    <p className="text-primary text-sm font-medium">Learning Journey Begins</p>
                  </div>
                  <span className="text-sm text-gray-500">2021</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Wrote my first trading algorithm using Python. Started learning about technical indicators, 
                  backtesting, and quantitative analysis. This sparked my passion for combining programming 
                  with financial markets.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-gray-700/50 rounded text-xs text-gray-300">Python</span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded text-xs text-gray-300">Technical Analysis</span>
                </div>
              </div>
            </div>

          </div>
        </div>




        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold mb-8">
            My <span className="text-primary">Education</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Left Column - School Images */}
            <div className="space-y-8">
              {/* University */}
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden hover:border-primary/50 transition-all group">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  <img
                    src="/uni.jpg"
                    alt="Uni"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-5xl">🏫</div>';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">University of Sydney</h4>
                  <p className="text-gray-400 text-sm">Bachelor of Advanced Computing</p>
                </div>
              </div>

              {/* High school */}
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden hover:border-primary/50 transition-all group">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                  <img
                    src="/highSchool.jpg"
                    alt="High School"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-5xl">🎓</div>';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">Canberra Grammar School</h4>
                  <p className="text-gray-400 text-sm">Class of 2025</p>
                </div>
              </div>
            </div>

            {/* Right Column - Education Details */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-primary/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <edu.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">
                    {edu.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}