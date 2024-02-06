"use client"

import React from 'react'
import {User} from '@prisma/client'
// import { User } from 'next-auth'


import Menu from '@/app/components/navigation/Menu'

import Link from 'next/link'



type NavigationProps = {
    currentUser: User | null
}


const Navigation: React.FC<NavigationProps> = ({currentUser}) => {
  return (
    <header className='shadow-lg shadow-gray-100 pl-[570px]' >
        <div className=' container mx-auto flex max-w-screen-sm  justify-items-center px-1 py-5'></div>
        <Link href="/" className=' cursor-pointer text-xl font-bold  '>
            Nextjs13-supabase-challenge
        </Link>

        <div className=' flex items-center justify-center space-x-2'>
            <Menu currentUser={currentUser} />
        </div>
    </header>
  )
}

export default Navigation