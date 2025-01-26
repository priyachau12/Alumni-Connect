import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className='flex font-bold justify-between p-5'>
      <div className='w-100 flex justify-evenly'>
          <NavLink to='/'>
            logo
          </NavLink>
          <NavLink to='/connect'>
            Connect
          </NavLink>
      </div>
      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton></SignOutButton>
        </SignedIn>
      </div>
    </div>
  )
}
