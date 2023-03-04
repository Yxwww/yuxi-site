import Nav from '../Nav'
import { map } from 'ramda'
import { HOME_LABEL } from 'constants/index'
import Image from '../Image'
import ProfilePicture from 'public/static/img/kinect-infra-red.jpeg'
import Link from 'next/link'
import { ThemePrefToggleBtn } from '../ThemePrefToggleBtn'

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
  return (
    <div className="flex justify-center">
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
      <div className="flex-grow flex justify-center items-center">
        <Nav items={NAV_ITEMS} />
      </div>
      <div className="flex justify-end items-center print:hidden">
        <ThemePrefToggleBtn />
      </div>
    </div>
  )
}
