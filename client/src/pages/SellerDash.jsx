import React from 'react'
import DashBoard from '../components/DashBoard'
import PhotoManagement from '../components/seller/PhotoManagement'

const SellerDash = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <DashBoard/>
      <PhotoManagement/>
    </div>
  )
}

export default SellerDash
