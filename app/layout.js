import { Red_Hat_Display, Red_Hat_Text, Red_Hat_Mono  } from 'next/font/google'
import "./globals.css"

export const metadata = {
  title: "OpenShift Next",
  description: "Proof of concept reimagination of Red Hat OpenShift",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-text antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
