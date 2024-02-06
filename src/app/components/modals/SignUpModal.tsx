"use client"

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-hot-toast'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import useLoginModal from '@/app/hooks/useLoginModal'
import useSignupModal from '@/app/hooks/useSignupModal'
import Modal from '@/app/components/modals/Modal'
import Input from '@/app/components/input/Input'
import Button from '@/app/components/button/Button'
import axios from 'axios'
import * as z from 'zod'


import React from 'react'
import useSignUpModal from '@/app/hooks/useSignupModal'

const schema = z.object({
    name: z.string().min(2, {message:'2文字以上入力する必要があります'}),
    email: z.string().email({ message: 'メールアドレスの形式ではありません'}),
    password: z.string().min(6, {message: '6文字以上入力する必要があります'})
})

const SignUpModal = () => {

    const router = useRouter()
    const signUpModal = useSignupModal()
    const loginModal = useLoginModal()
    const [loading,setLoading] = useState(false)

  return (
    <div>SignUpModal</div>
  )
}

export default SignUpModal