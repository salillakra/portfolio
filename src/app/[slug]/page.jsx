'use client'
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import "./style.css"

const Page = () => {
    const { slug } = useParams()

    useEffect(() => {
        const social = {
            github: 'https://www.github.com/salillakra',
            ig: 'https://www.instagram.com/officialsalillakra',
            linkedin: 'https://www.linkedin.com/in/salillakra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            twitter: 'https://www.twitter.com/salillakra223'
        }

        if (social[slug]) {
            window.location.href = social[slug]
        } else {
            window.location.href = 'https://salillakra.vercel.app'
        }

    }, [slug])
    return (
        <div className="area relative">
            <ul className="circles">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className=" text-lg md:text-4xl  text-white">Redirecting to {(slug == "ig") ? "Instagram" : `${slug}`}...</h1>
                </div>
            </div>
        </div>
    )
}

export default Page