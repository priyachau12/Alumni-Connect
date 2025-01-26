import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'
import React from 'react'

export const Dashboard = () => {
  return (
    <div className='flex font-bold justify-between p-5'>
      <div className='w-100 flex justify-evenly'>
          <a href='/'>
            logo
          </a>
          <a>
            Connect
          </a>
      </div>
        <a>
            <SignedOut>
              <SignInButton></SignInButton>
            </SignedOut>
            <SignedIn>
              <SignOutButton></SignOutButton>
            </SignedIn>
        </a>
    </div>
  )
}
