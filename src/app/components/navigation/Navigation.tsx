"use client"

import React from 'react'

import Link from 'next/link'

const Navigation = () => {
  return (
    <header className='shadow-lg shadow-gray-100 pl-[570px]' >
        <div className=' container mx-auto flex max-w-screen-sm  justify-items-center px-1 py-5'></div>
        <Link href="/" className=' cursor-pointer text-xl font-bold  '>
            Nextjs13-supabase-challenge
        </Link>

        <div className=' flex items-center justify-center space-x-2'>
            {/* <Menu /> */}
        </div>
    </header>
  )
}

export default Navigation