import './global.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Flexible',
  description: 'Show case and discover remaarkable applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        <main>
          {children}
        </main>

        <Footer />
      
      </body>

    </html>
  )
}
