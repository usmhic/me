import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oussama Hichou',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={montserrat.className}>
          <Nav />
          <div className=" px-5 pb-10 pt-28">
            {children}
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}
