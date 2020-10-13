import React from 'react'

export default function SocialIcons({ className }) {
  return (
    <div className={className}>
      <a
        title="print"
        href="#"
        onClick={e => {
          e.preventDefault()
          window.print()
        }}
      >
        <img
          className="social-icon"
          src="/static/img/icons/download.png"
          alt=""
        />
      </a>

      <a
        title="open github"
        href="https://github.com/Yxwww"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          className="social-icon"
          src="/static/img/icons/github-64px.png"
          alt=""
        />
      </a>

      <a
        title="open twitter"
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/thissushiguy"
      >
        <img
          className="social-icon"
          src="/static/img/logos/twitter-icon-4.png"
          alt=""
        />
      </a>
      <a
        title="open LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/yuxiwang/"
      >
        <img
          className="social-icon"
          src="/static/img/logos/in-black-28px.png"
          alt=""
        />
      </a>
      <a title="Email" href="mailto:yuxi.wang.dev@gmail.com">
        <img className="social-icon" src="/static/img/icons/email.png" alt="" />
      </a>
      <a title="Phone" href="rel:1-403-560-6778">
        <img className="social-icon" src="/static/img/icons/phone.png" alt="" />
      </a>
    </div>
  )
}
