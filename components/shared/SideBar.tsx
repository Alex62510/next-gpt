"use client"

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {SignedIn} from "@clerk/nextjs";
import {navLinks} from "@/constans";
import {useRouter} from "next/navigation";

const SideBar = () => {
    const pathname = useRouter()
    return (
        <aside className={'sidebar'}>
            <div className={'flex size-full flex-col gap-4'}>
                <Link href={'/'} className={'sidebar-logo'}>
                    <Image src={'/assets/images/logo-text.svg'} alt={'logo'} width={180}
                           height={280}/>
                </Link>
                <nav className={'sidebar-nav'}>
                    <SignedIn>
                        <ul className={'sidebar-nav_elements'}>
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route}
                                        className={`sidebar-nav_element group ${
                                            isActive ? "bg-purple-gradient text-white" : "text-gray-700"
                                        }`}>
                                        <Link className={'sidebar-link'}
                                              href={link.route}>
                                            <Image src={link.icon} alt={'logo'} width={24}
                                                   height={24}
                                                   className={`${isActive && 'brightness-200'}`}>

                                            </Image>
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </SignedIn>
                </nav>
            </div>
        </aside>
    );
};

export default SideBar;