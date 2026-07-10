import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Veliq - Used Cars, Specs & Reviews',
  description: 'Find the best Tokunbo (foreign used) cars in Nigeria. Compare prices, specs, and reviews for popular models like Toyota, Honda, and more.',
  keywords: 'used cars Nigeria, Tokunbo cars, car prices, car comparison, auto blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
