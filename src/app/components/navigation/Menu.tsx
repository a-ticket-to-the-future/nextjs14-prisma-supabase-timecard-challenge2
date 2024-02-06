"use client"

import { useCallback,useState } from 'react'
import { signOut } from 'next-auth/react'
// import { User } from 'next-auth'
import {User} from "@prisma/client";
//15分30秒の頃には赤線になってた.
//11:30秒あたりにもついていたかも

import useLoginModal from "@/app/hooks/useLoginModal"
import useSignUpModal from "@/app/hooks/useSignUpModal"
import useProfileModal from '@/app/hooks/useProfileModal'
import Image from 'next/image';


import React from 'react'
import MenuItem from './MenuItem';

type MenuProps = {
    currentUser: User | null
}

const Menu: React.FC<MenuProps> = ({currentUser}) => {

    const [isOpen,setIsOpen] = useState(false)
    const loginModal = useLoginModal();
    const signUpModal = useSignUpModal();
    const profileModal = useProfileModal();

    //メニューオープン
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    },[])

  return (
    <div className=' relative'>
        <div className=' relative h-10 w-10 cursor-pointer' onClick={toggleOpen}>
            <Image 
                src={currentUser?.image || '/default.jpeg'}
                className=' rounded-full object-cover'
                alt='avatar'
                fill
            />
        </div>

        {isOpen && (
            <div className='absolute right-0 z-10 w-40 overflow-hidden rounded-lg bg-white text-sm shadow-lg shadow-gray-100'>
                <div className=' cursor-pointer'>
                    (currentUser ? (
                        <>
                <MenuItem
                  label="プロフィール"
                  onClick={() => {
                    profileModal.onOpen()
                    setIsOpen(false)
                  }}
                />
                <MenuItem
                  label="ログアウト"
                  onClick={() => {
                    signOut()
                    setIsOpen(false)
                  }}
                />
              </>
                    ) : (
                        <>
                <MenuItem
                  label="ログイン"
                  onClick={() => {
                    loginModal.onOpen()
                    setIsOpen(false)
                  }}
                />
                <MenuItem
                  label="サインアップ"
                  onClick={() => {
                    signUpModal.onOpen()
                    setIsOpen(false)
                  }}
                />
              </>
                    ))
                    
                </div>
            </div>

        )

        }
    </div>
  )
}

export default Menu