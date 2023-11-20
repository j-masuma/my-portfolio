import React from 'react'

function Footer() {
  return (
    <div className='bg-dark text-white text-center p-4'>
        copyright @{new Date().getFullYear()} by Javararia's creation
    </div>
  )
}

export default Footer