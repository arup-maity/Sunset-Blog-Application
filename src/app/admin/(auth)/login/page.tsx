'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { Input } from '@/components/ui/input';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

type LoginInputType = {
   email: string
   password: string
}

const LoginPage = () => {
   const [showPassword, setShowPassword] = useState(false)
   const schemaValidation = z.object({
      email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
      password: z.string().min(1, { message: "This field has to be filled." }).regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/, {
         message: "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
      })
   })
   const { register, handleSubmit, formState: { errors } } = useForm<LoginInputType>({
      mode: 'onSubmit',
      resolver: zodResolver(schemaValidation),
   })
   const onSubmit: SubmitHandler<LoginInputType> = (data) => console.log(data)

   return (
      <div className="font-[sans-serif]">
         <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-12 h-[320px]">
            <div>
               <Link href="/">
                  {/* <img src="https://readymadeui.com/readymadeui-white.svg" alt="logo" className='w-40' /> */}
               </Link>
               <div className="max-w-lg mt-16 max-lg:hidden">
                  <h3 className="text-3xl font-bold text-white">Sign in</h3>
                  <p className="text-sm mt-4 text-white">Embark on a seamless journey as you sign in to your account. Unlock a realm of opportunities and possibilities that await you.</p>
               </div>
            </div>
            <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-8">
                     <h3 className="text-3xl font-extrabold text-gray-800">Sign in</h3>
                  </div>
                  <div className="sm:flex sm:items-start space-x-4 max-sm:space-y-4 mb-8">
                     <button type="button" className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline mr-4" viewBox="0 0 512 512">
                           <path fill="#fbbd00"
                              d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                              data-original="#fbbd00" />
                           <path fill="#0f9d58"
                              d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                              data-original="#0f9d58" />
                           <path fill="#31aa52"
                              d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                              data-original="#31aa52" />
                           <path fill="#3c79e6"
                              d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                              data-original="#3c79e6" />
                           <path fill="#cf2d48"
                              d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                              data-original="#cf2d48" />
                           <path fill="#eb4132"
                              d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                              data-original="#eb4132" />
                        </svg>
                        Sign in with Google
                     </button>
                  </div>
                  <div>
                     <label className="text-gray-800 text-sm mb-2 block">User name</label>
                     <div className="relative flex items-center">
                        <Input  {...register("email")} className='h-10' />
                     </div>
                     {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div className="mt-4">
                     <label className="text-gray-800 text-sm mb-2 block">Password</label>
                     <div className="relative flex items-center">
                        <Input type={showPassword ? 'text' : 'password'}  {...register("password")} className='h-10' />
                        <div className="absolute top-2.5 right-3" onClick={() => setShowPassword(prev => !prev)}>
                           {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                        </div>
                     </div>
                     {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                  </div>
                  <div className="mt-4 text-right">
                     <Link href="/admin/forget-password" className="text-blue-600 text-sm hover:underline">
                        Forgot your password?
                     </Link>
                  </div>
                  <div className="mt-8">
                     <button type="submit" className="w-full shadow-xl py-2 px-6 text-base rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                        Log in
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default LoginPage