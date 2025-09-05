'use client'

import useCartStore from "@/stores/cartStore"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
  const {cart}=useCartStore()
  return (
    <Link href="/cart" className=" relative">
      <ShoppingCart className='w-4 h-4 text-gray-600' />
      <span className=' absolute text-gray-600 -top-3 -right-3 bg-amber-400 flex items-center justify-center text-xs font-medium w-4 h-4 rounded-full'>{cart.length}</span>
    </Link>
  )
}

export default ShoppingCartIcon