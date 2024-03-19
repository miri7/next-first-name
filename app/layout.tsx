import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GYP Home Page',
  description: 'Generated with GYP',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='mr-2'>
         
          {children}
        </div>
      </body>
    </html>
  )
}
