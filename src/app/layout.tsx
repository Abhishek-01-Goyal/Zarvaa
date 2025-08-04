import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


export const metadata = {
  title: 'Zarvaa - Online Gardening Store',
  description: 'Buy plants, pots, compost and build your own DIY garden kits.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
