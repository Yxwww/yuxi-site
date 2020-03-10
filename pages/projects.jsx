import React from 'react'
import Link from 'next/link'
import Page from '../components/layouts/main'

const PostLink = ({ id, children }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a>{children || <a>{id}</a>}</a>
    </Link>
  </li>
)
export default () => (
  <Page>
    <div className="container relative screen-nav">
      <h1>Projects</h1>
      <div className="mt-8">
        <div className="my-4">
          <ul className="m-2">
            <li>
              <PostLink id="sod">SoD Toolkit</PostLink>
            </li>
            <li>
              <PostLink id="steno3d-view">Steno3D (Leapfrog View)</PostLink>
            </li>
          </ul>
        </div>
        <p>
          Under construction{' '}
          <img
            className="social-icon transform -rotate-45 transition ease-in-out duration-200 hover:rotate-0"
            src="/static/img/icons/hammer.svg"
            alt="hammer-icon"
          />
        </p>
        <div className="absolute bottom-0">
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
      </div>
    </div>
  </Page>
)
