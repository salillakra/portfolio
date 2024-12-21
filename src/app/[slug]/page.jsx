'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import "./style.css"

const Page = ({ params }) => {
    const router = useRouter()
    const { slug } = params

    useEffect(() => {
        const social = {
            github: 'https://www.github.com/salillakra',
            ig: 'https://www.instagram.com/officialsalillakra',
            linkedin: 'https://www.linkedin.com/in/salil-lakra-42b504323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            twitter: 'https://www.twitter.com/salillakra223'
        }

        if (social[slug]) {
            router.replace(social[slug])
        } else {
            router.replace('/')
        }

    }, [router, slug])
    return (
        <div className="area relative">
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className=" text-lg md:text-4xl  text-white">Redirecting to {(slug == "ig") ? "Instagram" : `${slug}`}...</h1>
                </div>
            </div>
        </div>
    )
}

export default page