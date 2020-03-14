import React from 'react'
import Link from 'next/link'

export default function Attributions() {
  return (
    <div className="absolute bottom-0 text-center">
      <div>
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/nikita-golubev"
          title="Nikita Golubev"
        >
          Nikita Golubev
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Fonts is made by{' '}
        <Link href="https://monolisa.dev/">
          <a>https://monolisa.dev/</a>
        </Link>
      </div>
    </div>
  )
}
