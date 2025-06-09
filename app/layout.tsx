import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PUJA SUARA | Mathematics Education Student & AI Enthusiast',
  description: 'Portfolio of PUJA SUARA (krypton-byte) - Mathematics Education student at Universitas Sindang Kasih with passion for Artificial Intelligence, especially Large Language Models. Specializing in WhatsApp automation, mobile development, and innovative tech solutions.',
  keywords: ['PUJA SUARA', 'krypton-byte', 'Mathematics Education', 'AI', 'LLM', 'WhatsApp Automation', 'Python', 'Rust', 'Flutter', 'Mobile Development', 'Neonize', 'QRIS'],
  authors: [{ name: 'PUJA SUARA', url: 'https://github.com/krypton-byte' }],
  creator: 'PUJA SUARA',
  publisher: 'PUJA SUARA',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'PUJA SUARA | Mathematics Education Student & AI Enthusiast',
    description: 'Portfolio of PUJA SUARA - Mathematics Education student with expertise in AI, WhatsApp automation, and innovative tech solutions.',
    siteName: 'PUJA SUARA Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PUJA SUARA | Mathematics Education Student & AI Enthusiast',
    description: 'Portfolio of PUJA SUARA - Mathematics Education student with expertise in AI, WhatsApp automation, and innovative tech solutions.',
    creator: '@krypton-byte',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
