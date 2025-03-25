import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
    const router = useRouter();
    const handleLogOut = async () => {
        const loggedout = await logoutAccount();

        if(loggedout) router.push('/sign-in');
    }

  return (
    <footer className="flex cursor-pointer items-center justify-between gap-2 py-6 px-2! pb-2!">
        <div className={type === 'mobile' ? 'flex size-10 items-center justify-center rounded-full bg-gray-200' : 'flex size-10 items-center justify-center rounded-full bg-gray-200 max-xl:hidden'}>
            <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
        </div>
        <div className={type === 'mobile' ? 'flex flex-1 flex-col justify-center' : 'flex flex-1 flex-col justify-center max-xl:hidden'}>
            <h1 className="text-2xl truncate text-gray-700 font-semibold">
                {user?.name}
            </h1>
            <p className="text-2xl truncate font-normal text-gray-600">
                {user?.email}
            </p>
        </div>
        <div className="footer_image" onClick={handleLogOut}>
            <Image 
                src='icons/logout.svg'
                fill
                alt='Logout logo'
            />
        </div>
    </footer>
  )
}

export default Footer