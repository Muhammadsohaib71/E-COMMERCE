
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col md:flex-row md:items-start rounded-xl p-8 bg-gray-800 gap-8 md:gap-0 md:justify-between'>
        <div className='flex flex-col items-center gap-4 md:items-start'>
              <Link href='/' className='flex items-center'>
        <Image src='/logo.png' alt='TrendLama'  width={36} height={36} />
        <p className=' hidden md:block text-md font-medium tracking-wider text-white'>TRENDLAMA</p>
        </Link>
        <p className='text-center text-gray-400'>© 2025 Trendlama.</p>
        <p className='text-center text-gray-400'>All rights reserved.</p>
        </div>
        <div className='flex flex-col text-sm text-gray-400 items-center gap-4 md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms of Services</Link>
            <Link href="/">Privacy </Link>

        </div>
         <div className='flex flex-col text-sm text-gray-400 items-center gap-4 md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/">All Product</Link>
            <Link href="/">New Arrival</Link>
            <Link href="/">Best Sellers</Link>
            <Link href="/">Sale </Link>

        </div>
         <div className='flex flex-col text-sm text-gray-400 items-center gap-4 md:items-start'>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Afilliated Program </Link>

        </div>
    </div>
  )
}

export default Footer