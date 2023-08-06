import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import {ChatAppProvider} from "./context/ChatAppContext"
// import { Navbar } from './components'
const metadata = {
  title: 'CHAT APP',
  description: 'This is a WEB3 Chat application powered by ethereum smart contracts',
}

export default function RootLayout({ children }) {
  return (
    <ChatAppProvider>
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
    </ChatAppProvider>
  )
}
export {metadata};