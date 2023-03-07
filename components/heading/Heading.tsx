import { useState } from 'react'
import Nav from '../Nav'
import { map } from 'ramda'
import { HOME_LABEL } from 'constants/index'
import Image from '../Image'
import ProfilePicture from 'public/static/img/kinect-infra-red.jpeg'
import Link from 'next/link'
import { ThemePrefToggleBtn } from '../ThemePrefToggleBtn'
import NavToggle from './NavToggle'

export interface NavItem {
  url: string
  label: string
}
export type NavItems = ReadonlyArray<NavItem>

const createNavItems: (args: [string, string][]) => NavItems = map(
  ([url, label]) => ({
    url,
    label,
  })
)

const NAV_ITEMS_TUPLES: [string, string][] = [
  ['/', HOME_LABEL],
  ['/resume', 'resume'],
  ['/projects', 'projects'],
  ['/blogs', 'blogs'],
]
const NAV_ITEMS: ReadonlyArray<NavItem> = createNavItems(NAV_ITEMS_TUPLES)

export default function Heading() {
  const [navCollapse, setCollapse] = useState(false)
  return (
    <div className={`flex justify-center`}>
      <div className="flex justify-start items-center">
        <Link href="/">
          <Image
            imageClassName="rounded-full"
            src={ProfilePicture}
            alt="profile-kinect-infra-red"
            width={36}
            height={36}
          />
        </Link>
      </div>
      <div className="flex-grow flex justify-center items-start">
        <Nav items={NAV_ITEMS} collapsed={navCollapse} />
      </div>
      <div className="flex justify-end items-center print:hidden">
        <div className="p-1 sm:hidden">
          <NavToggle
            active={navCollapse}
            onClick={() => {
              setCollapse((v) => !v)
            }}
          />
        </div>
        <div className="p-1">
          <ThemePrefToggleBtn />
        </div>
      </div>
    </div>
  )
}
