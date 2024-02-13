import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from "@/app/components/navigation/Navigation"
import AuthContext from './context/AuthContext'
import getCurrentUser from './actions/getCurrentUser'
import ToasterContext from './context/ToasterContext'
import SignUpModal from '@/app/components/modals/SignUpModal'
import LoginModal from '@/app/components/modals/LoginModal'
import useProfileModal from './hooks/useProfileModal'
import ProfileModal from './components/modals/ProfileModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prisma Auth',
  description: 'Prisma Auth',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          {/* Toaster */}
          <ToasterContext />

          <SignUpModal />

          <LoginModal />
          <ProfileModal currentUser={currentUser} />
        <div>
          <div className='flex min-h-screen flex-col '>
            <Navigation currentUser={currentUser} />

            <main className='container mx-auto max-w-screen-sm flex-1 px-1 py-5'>{children}</main>
            <footer className='py-5'>
              <div className='text-center text-sm'>
                nextjs13-supabase-challenge
              </div>
            </footer>
          </div>
        </div>
        </AuthContext>
      </body>
    </html>
  )
}
