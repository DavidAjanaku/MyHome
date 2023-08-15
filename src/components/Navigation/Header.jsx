import React from 'react'

export default function Header() {
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-around items-center uppercase'> 
            <div>
                <img src="https://img.freepik.com/premium-vector/building-logo-vector-illustration-design-real-estate-logo-template-logo-symbol-icon_9999-1673.jpg" className='h-26 w-20 cursor-pointer' alt="logo" />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li>Buy</li>
                    <li>Sell</li>
                    <li>Mortgage</li>
                </ul>
            </div>
            <div>
               <ul className='flex space-x-10'>
               <li>log in</li>
                <li>
                    <button className='uppercase'>
                        Sign up
                    </button>
                </li>
               </ul>
            </div>
        </header>
    </div>
  )
}
