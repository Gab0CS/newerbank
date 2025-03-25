"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "./Footer"
  

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
        <Sheet>
            <SheetTrigger>
                <Image 
                src="/icons/hamburger.svg"
                width={30}
                height={30}
                className="cursor-pointer"
                alt="menu"
                />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-white">
            <SheetTitle hidden>Mobile menu</SheetTitle>
                <Link href="/" className="cursor-pointer items-center gap-1 flex px-4 !py-5">
                    <Image src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt='newer bank logo'/>
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black">NwB</h1>
                </Link>
                <div className="flex h-[calc(95vh-72px)] flex-col justify-between overflow-y-auto">
                    <SheetClose asChild>
                        <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                        {sidebarLinks.map((item) => {
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                            return (
                                <SheetClose asChild key={item.route}>
                                    <Link href={item.route} key={item.label}
                                        className={cn('mobilenav-sheet_close w-full', {'bg-blue-500': isActive})}>
                                        <Image 
                                        src={item.imgURL}
                                        alt={item.label}
                                        width={20}
                                        height={20}
                                        className={cn({'brightness-[3] invert-0': isActive})}
                                        />
                                        <p className={cn('text-16 font-semibold text-black', {'!text-white': isActive})}>{item.label}</p>
                                    
                                    </Link>
                                </SheetClose>
                            )
                            })}
                            USER
                        </nav>
                    </SheetClose>
                    <Footer user={user} type="mobile"/>
                </div>
                
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav

