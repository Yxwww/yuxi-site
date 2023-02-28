import React from 'react'
import ProfilePicture from '/public/static/img/icons/download.png'
import GithubIcon from '/public/static/img/icons/github-64px.png'
import TwitterIcon from '/public/static/img/logos/twitter-icon-4.png'
import LinkedinIcon from '/public/static/img/logos/in-black-28px.png'
import EmailIcon from '/public/static/img/icons/email.png'
import PhoneIcon from '/public/static/img/icons/phone.png'
import Image from './Image'
import Link from 'next/link'

export default function SocialIcons({ className }) {
  return (
    <div className={className}>
      <button
        title="print"
        onClick={(e) => {
          e.preventDefault()
          window.print()
        }}
      >
        <Image src={ProfilePicture} className="social-icon" alt="" fill />
      </button>

      <Link
        title="open github"
        href="https://github.com/Yxwww"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image className="social-icon" src={GithubIcon} alt="" />
      </Link>

      <Link
        title="open twitter"
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/thissushiguy"
      >
        <Image className="social-icon" src={TwitterIcon} alt="Twitter link" />
      </Link>

      <Link
        title="open LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/yuxiwang/"
      >
        <Image className="social-icon" src={LinkedinIcon} alt="Linkedin Link" />
      </Link>
      <Link title="Email" href="mailto:yuxi.wang.dev@gmail.com">
        <Image className="social-icon" src={EmailIcon} alt="" />
      </Link>
      <Link title="Phone" href="rel:1-403-560-6778">
        <Image className="social-icon" src={PhoneIcon} alt="" />
      </Link>
    </div>
  )
}
