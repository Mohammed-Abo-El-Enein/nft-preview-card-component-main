import React from 'react'
import "./globals.css";

interface Props  {
  children: React.ReactNode
}

export default function RootLayout({children}: Props) {
  return (
 <html>
  <body>
    {children}
  </body>
 </html>
  )
}