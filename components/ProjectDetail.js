'use client';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, TrendingUp, AlertCircle, Lightbulb, Target, BarChart3, Code2, FileText } from 'lucide-react';

export default function ProjectDetail({ project }) {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-12">
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded text-xs font-semibold border border-primary/30">{project.category}</span>
                <span className="px-3 py-1 bg-green-800 text-gray-300 rounded text-xs font-semibold">{project.status}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.name}</h1>
              <p className="text-xl text-gray-400 mb-6">{project.tagline}</p>
              
              
<div className="flex gap-4">
  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-all">
    <Github size={20} />
    View Code
  </a>
  {project.liveDemo && (
    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-all">
      <ExternalLink size={20} />
      Live Demo
    </a>
  )}
  {project.whitepaper && (
    <a href={project.whitepaper} download className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download Whitepaper
    </a>
  )}
</div>


            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-primary" size={24} />
                <h2 className="text-2xl font-bold">Hero Summary</h2>
              </div>
              <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">What</h3>
                  <p className="text-gray-400">{project.overview}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Why</h3>
                  <p className="text-gray-400">{project.strategyExplanation}</p>
                </div>
                {project.metrics && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Result</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="bg-gray-900/50 rounded p-3">
                          <p className="text-xs text-gray-500 capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="text-lg font-bold text-white">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="text-primary" size={24} />
                <h2 className="text-2xl font-bold">System Overview</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">How It Works</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">{project.strategyExplanation}</p>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-700/50 rounded text-sm text-gray-300">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Technical Implementation</h3>
                  <p className="text-gray-400 leading-relaxed">{project.technicalDetails}</p>
                </div>
              </div>
            </div>

            {project.backtestResults && (
              <div className="border-t border-gray-700 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold">Performance & Risk Metrics</h2>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{project.backtestResults.ticker}</h3>
                      <p className="text-blue-200 text-sm">Backtest Performance Analysis</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-200 text-xs">Test Period</p>
                      <p className="text-white font-semibold">{project.backtestResults.totalTrades} Trades</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-blue-200 text-xs mb-1">Initial Capital</p>
                      <p className="text-white text-xl font-bold">${project.backtestResults.initialValue.toFixed(2)}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-blue-200 text-xs mb-1">Final Value</p>
                      <p className="text-white text-xl font-bold">${project.backtestResults.finalValue.toFixed(2)}</p>
                    </div>
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-green-200 text-xs mb-1">Net Profit</p>
                      <p className="text-green-400 text-xl font-bold">${project.backtestResults.netProfit.toFixed(2)}</p>
                    </div>
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-green-200 text-xs mb-1">Annual Return</p>
                      <p className="text-green-400 text-xl font-bold">{project.backtestResults.annualizedReturn}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Risk-Adjusted Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Sharpe Ratio</p>
                        <p className="text-white font-semibold">{project.backtestResults.sharpeRatio}</p>
                        <p className="text-blue-300 text-xs mt-1">Risk-adjusted return</p>
                      </div>
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Sortino Ratio</p>
                        <p className="text-white font-semibold">{project.backtestResults.sortinoRatio}</p>
                        <p className="text-blue-300 text-xs mt-1">Downside risk focus</p>
                      </div>
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Calmar Ratio</p>
                        <p className="text-white font-semibold">{project.backtestResults.calmarRatio}</p>
                        <p className="text-blue-300 text-xs mt-1">Return vs drawdown</p>
                      </div>
                    </div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mt-4">Trading Performance</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Win Rate</p>
                        <p className="text-green-400 font-semibold">{project.backtestResults.winRate}</p>
                      </div>
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Profit Factor</p>
                        <p className="text-green-400 font-semibold">{project.backtestResults.profitFactor}</p>
                      </div>
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Max Drawdown</p>
                        <p className="text-red-400 font-semibold">{project.backtestResults.maxDrawdown}</p>
                      </div>
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Avg Trade</p>
                        <p className="text-white font-semibold">${project.backtestResults.averageTrade}</p>
                      </div>
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Expectancy</p>
                        <p className="text-white font-semibold">${project.backtestResults.expectancy}</p>
                      </div>
                      <div className="bg-white/5 rounded p-3">
                        <p className="text-blue-200 text-xs mb-1">Avg Hold</p>
                        <p className="text-white font-semibold">{project.backtestResults.avgHoldingPeriod}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="border-t border-gray-700 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold">Trade Examples & Visualizations</h2>
                </div>
                <p className="text-gray-400 mb-6">Visual examples of the strategy in action, showing entry/exit points, equity curves, and market behavior.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, idx) => (
                    <div key={idx} className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary/50 transition-all group">
                      <img src={image} alt={`${project.name} visualization ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center text-gray-500"><svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg><p class="text-sm">Chart Placeholder</p></div>'; }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div className="border-t border-gray-700 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold">Limitations & Failure Modes</h2>
                </div>
                <p className="text-gray-400 mb-6">Every strategy has weaknesses. Here are the known limitations and scenarios where this system struggles.</p>
                <div className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-red-500/30 transition-colors">
                      <div className="flex gap-3">
                        <span className="text-red-400 font-bold text-lg">⚠</span>
                        <div>
                          <p className="text-gray-300">{challenge}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-gray-700 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-primary" size={24} />
                <h2 className="text-2xl font-bold">Key Learnings</h2>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-6">
                <p className="text-gray-300 leading-relaxed">{project.lessonsLearned}</p>
              </div>
            </div>

            {project.futureImprovements && project.futureImprovements.length > 0 && (
              <div className="border-t border-gray-700 pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold">Future Improvements</h2>
                </div>
                <p className="text-gray-400 mb-6">Planned enhancements and next steps for this project.</p>
                <div className="space-y-3">
                  {project.futureImprovements.map((improvement, idx) => (
                    <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-primary/50 transition-colors">
                      <div className="flex gap-3">
                        <span className="text-primary font-bold">→</span>
                        <p className="text-gray-300">{improvement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Category</p>
                  <p className="text-sm text-white">{project.category}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <span className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">{project.status}</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300">{tech}</span>
                    ))}
                  </div>
                </div>
                {project.github && (
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Links</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline mb-2">
                      <Github size={14} />
                      Source Code
                    </a>
                    {project.liveDemo && (
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}