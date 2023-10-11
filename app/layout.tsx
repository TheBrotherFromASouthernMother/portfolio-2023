'use client';
import 'app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AnimatePresence } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AnimatePresence>
       <body className={inter.className}>{children}</body>
      </AnimatePresence>
    </html>
  )
}
