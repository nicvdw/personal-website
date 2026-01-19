import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: 'Nicolaas van der Walt | Quantitative Trader & Developer',
  description: 'Finance student specializing in algorithmic trading, backtesting frameworks, and quantitative analysis. View my trading strategies and portfolio.',
  keywords: 'quantitative trading, algorithmic trading, finance, portfolio, data science',
  openGraph: {
    title: 'Nicolaas van der Walt Portfolio',
    description: 'Quantitative trader and developer showcasing trading strategies and projects',
    images: ['/og-image.jpg'], // Create this image: 1200x630px
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

