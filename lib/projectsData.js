// lib/projectsData.js

export const projects = [
  {
    id: 'rsi-trading-bot',
    name: 'Automated RSI Trading Strategy',
    slug: 'rsi-trading-bot',
    tagline: 'Algorithmic trading bot using RSI indicators for optimal entry and exit signals',
    description: 'A Python-based automated trading bot that leverages the Relative Strength Index (RSI) to identify overbought and oversold conditions in the market, executing trades with predefined risk management parameters.',
    category: 'Trading Bot',
    status: 'Live',
    featured: true,
    thumbnail: '/projects/rsi-bot.jpg',
    
    technologies: ['Python', 'Pandas', 'Backtrader', 'NumPy', 'Matplotlib'],
    
    github: 'https://github.com/yourusername/rsi-trading-bot',
    liveDemo: null,
    whitepaper: '/whitepapers/rsi-report.pdf',
    
    metrics: {
      annualReturn: '15.20%',
      winRate: '70%',
      sharpeRatio: '0.56',
      profitFactor: '3.85'
    },
    
    backtestResults: {
      ticker: 'TSLA',
      initialValue: 1000,
      finalValue: 4107.84,
      netProfit: 3107.84,
      annualizedReturn: '15.20%',
      profitFactor: 3.85,
      maxDrawdown: '-52.70%',
      sharpeRatio: 0.56,
      sortinoRatio: 0.59,
      calmarRatio: 0.29,
      winRate: '70.00%',
      expectancy: 26.77,
      totalTrades: 10,
      averageTrade: 310.78,
      avgHoldingPeriod: '176.3 days'
    },
    
    overview: `This automated trading system uses the Relative Strength Index (RSI) to identify potential trading opportunities in volatile stocks. The bot monitors market conditions in real-time and executes trades based on predefined RSI thresholds, ensuring consistent application of the strategy without emotional bias.`,
    
    strategyExplanation: `The strategy enters long positions when RSI drops below 30 (oversold condition) and exits when RSI rises above 70 (overbought condition). Risk management is implemented through stop-loss orders at 5% below entry price and position sizing based on account equity. The system includes filters to avoid trading during low-volume periods and market gaps.`,
    
    technicalDetails: `Built using Python with the Backtrader framework for backtesting and live trading capabilities. Data is sourced from Interactive Brokers API with real-time price feeds. The system uses Pandas for data manipulation, NumPy for calculations, and Matplotlib for performance visualization. Trade execution is handled through the broker's API with proper error handling and logging.`,
    
    lessonsLearned: `The most important lesson was the impact of transaction costs on profitability. Initial backtests showed higher returns, but realistic commission and slippage assumptions brought returns down significantly. I also learned the importance of testing across different market conditions - the strategy performs well in trending markets but struggles in choppy, sideways markets. Future versions will include market regime detection.`,
    
    images: [
      '/projects/rsi-bot-chart.jpg',
      '/projects/rsi-bot-dashboard.jpg',
      '/projects/rsi-bot-code.jpg'
    ],
    
    challenges: [
      'Handling API rate limits during backtesting',
      'Optimizing RSI parameters without overfitting',
      'Managing execution latency in live trading'
    ],
    
    futureImprovements: [
      'Add machine learning for dynamic RSI threshold adjustment',
      'Implement multi-timeframe analysis',
      'Create web dashboard for monitoring performance',
      'Add support for multiple assets simultaneously'
    ]
  },
  
  {
    id: 'portfolio-optimizer',
    name: 'Portfolio Optimization Tool',
    slug: 'portfolio-optimizer',
    tagline: 'Modern portfolio theory implementation with efficient frontier visualization',
    description: 'A comprehensive portfolio optimization tool that helps investors construct optimal portfolios using mean-variance optimization and Monte Carlo simulations.',
    category: 'Analysis Tool',
    status: 'Live',
    featured: true,
    thumbnail: '/projects/portfolio-optimizer.jpg',
    
    technologies: ['Python', 'NumPy', 'SciPy', 'Plotly', 'Streamlit'],
    
    github: 'https://github.com/yourusername/portfolio-optimizer',
    liveDemo: 'https://portfolio-optimizer.streamlit.app',
    whitepaper: '/whitepapers/portfolio-optimizer.pdf',
    
    metrics: {
      portfolios: '10,000+',
      assets: '100+',
      users: '500+',
      accuracy: '99.9%'
    },
    
    overview: `An interactive web application that implements Modern Portfolio Theory to help users construct optimal investment portfolios. The tool calculates expected returns, volatility, and correlation matrices to identify the efficient frontier and suggest portfolio allocations.`,
    
    strategyExplanation: `Uses mean-variance optimization to maximize returns for a given level of risk or minimize risk for a target return. The tool generates thousands of random portfolio weights and plots them on a risk-return scatter plot, highlighting the efficient frontier. Users can specify constraints like maximum position size and minimum diversification.`,
    
    technicalDetails: `Built with Streamlit for the web interface and Python for calculations. Uses Yahoo Finance API for historical price data. SciPy's optimization algorithms find the optimal weights, while Plotly creates interactive visualizations. The Monte Carlo simulation runs 10,000 iterations to map the efficient frontier.`,
    
    lessonsLearned: `Historical correlations don't predict future correlations, making real-world application challenging. I learned to implement rolling correlation matrices and stress-testing scenarios. Also discovered the importance of transaction costs when rebalancing frequently.`,
    
    images: [
      '/projects/portfolio-frontier.jpg',
      '/projects/portfolio-weights.jpg'
    ],
    
    challenges: [
      'Handling missing data from different asset start dates',
      'Optimizing calculation speed for large portfolios',
      'Creating intuitive UI for complex financial concepts'
    ],
    
    futureImprovements: [
      'Add Black-Litterman model implementation',
      'Include factor-based portfolio construction',
      'Support for alternative assets (crypto, commodities)',
      'Backtesting with rebalancing strategies'
    ]
  },
  
  {
    id: 'market-sentiment-analyzer',
    name: 'Market Sentiment Analyzer',
    slug: 'market-sentiment-analyzer',
    tagline: 'Real-time sentiment analysis from news and social media for trading signals',
    description: 'An NLP-powered tool that analyzes market sentiment from news articles, Twitter, and Reddit to generate trading signals and market mood indicators.',
    category: 'Analysis Tool',
    status: 'In Development',
    featured: false,
    thumbnail: '/projects/sentiment-analyzer.jpg',
    
    technologies: ['Python', 'NLTK', 'Transformers', 'React', 'WebSocket'],
    
    github: 'https://github.com/yourusername/sentiment-analyzer',
    liveDemo: null,
    whitepaper: '/whitepapers/market-sentiment.pdf',
    
    metrics: {
      accuracy: '78%',
      sources: '50+',
      updates: 'Real-time',
      symbols: '500+'
    },
    
    overview: `A comprehensive sentiment analysis platform that processes thousands of news articles, tweets, and Reddit posts to gauge market sentiment for individual stocks and the broader market. Uses advanced NLP models to classify text as bullish, bearish, or neutral.`,
    
    strategyExplanation: `Aggregates sentiment scores from multiple sources and generates a composite sentiment indicator. High positive sentiment triggers long signals, while high negative sentiment suggests short opportunities. The system includes anomaly detection to identify unusual spikes in sentiment that often precede significant price movements.`,
    
    technicalDetails: `Uses FinBERT transformer model for financial sentiment classification. Data is collected via Twitter API, Reddit API, and news RSS feeds. Real-time processing pipeline built with Python and WebSocket connections. React frontend displays live sentiment dashboards with historical trends.`,
    
    lessonsLearned: `Sentiment doesn't always correlate with price movements - sometimes extreme positive sentiment indicates a market top. I learned to use sentiment as a contrarian indicator in certain market conditions. API rate limits also required implementing efficient data collection strategies.`,
    
    images: [
      '/projects/sentiment-dashboard.jpg',
      '/projects/sentiment-heatmap.jpg'
    ],
    
    challenges: [
      'Filtering out spam and bot-generated content',
      'Handling multiple languages and slang',
      'Managing API costs and rate limits'
    ],
    
    futureImprovements: [
      'Add support for earnings call transcripts',
      'Implement custom trained models for specific sectors',
      'Create alerts for sentiment anomalies',
      'Build historical sentiment database'
    ]
  },
  
  {
    id: 'backtest-framework',
    name: 'Custom Backtesting Framework',
    slug: 'backtest-framework',
    tagline: 'High-performance backtesting engine for quantitative trading strategies',
    description: 'A custom-built backtesting framework designed for speed and flexibility, supporting multiple asset classes and complex trading strategies.',
    category: 'Backtesting Tool',
    status: 'Live',
    featured: false,
    thumbnail: '/projects/backtest-framework.jpg',
    
    technologies: ['Python', 'Cython', 'Pandas', 'PostgreSQL', 'Docker'],
    
    github: 'https://github.com/yourusername/backtest-framework',
    liveDemo: null,
    whitepaper: '/whitepapers/backtest-framework.pdf',
    
    metrics: {
      speed: '10,000 trades/sec',
      strategies: '25+',
      data: '20+ years',
      accuracy: '99.99%'
    },
    
    overview: `A production-grade backtesting engine built from scratch to overcome limitations of existing frameworks. Supports multiple timeframes, custom indicators, and realistic order execution modeling including slippage and commissions.`,
    
    strategyExplanation: `Framework allows testing any strategy with custom entry/exit logic. Supports limit orders, stop orders, trailing stops, and complex order types. Position sizing can be fixed, percentage-based, or Kelly Criterion. Walk-forward optimization prevents look-ahead bias.`,
    
    technicalDetails: `Core engine written in Cython for performance optimization. Uses PostgreSQL for tick data storage with efficient time-series queries. Docker containerization ensures reproducible backtest environments. Pandas DataFrames for indicator calculations with vectorized operations where possible.`,
    
    lessonsLearned: `Pre-optimization is crucial - spent weeks optimizing data structures before writing strategy logic. Learned the importance of proper timestamp handling across different exchanges and time zones. Also discovered that realistic execution modeling is more important than having perfect entry signals.`,
    
    images: [
      '/projects/backtest-performance.jpg',
      '/projects/backtest-architecture.jpg'
    ],
    
    challenges: [
      'Handling tick-level data efficiently',
      'Preventing look-ahead bias in indicator calculations',
      'Modeling realistic order execution and market impact'
    ],
    
    futureImprovements: [
      'Add GPU acceleration for parameter optimization',
      'Implement distributed backtesting across multiple servers',
      'Create web UI for strategy building without coding',
      'Add support for options and futures strategies'
    ]
  }
];

export const categories = [
  'All Projects',
  'Trading Bot',
  'Backtesting Tool',
  'Analysis Tool',
  'Portfolio Management',
  'Data Processing'
];

export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  if (category === 'All Projects') return projects;
  return projects.filter(project => project.category === category);
};