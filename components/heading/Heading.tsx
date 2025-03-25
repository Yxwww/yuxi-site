import { useEffect } from 'react';
import Nav from '../Nav';
import { map } from 'ramda';
import { HOME_LABEL } from 'constants/index';
import Image from '../Image';
import ProfilePicture from 'public/static/img/kinect-infra-red.jpeg';
import Link from 'next/link';
import { ThemePrefToggleBtn } from '../ThemePrefToggleBtn';
import NavToggle from './NavToggle';
import { useLocalStorage } from '@/utils/hooks';
import { useRouter } from 'next/router';
import RssFeedBtn from '../RssFeedBtn';

export interface NavItem {
  url: string;
  label: string;
}
export type NavItems = ReadonlyArray<NavItem>;

const createNavItems: (args: [string, string][]) => NavItems = map(
  ([url, label]) => ({
    url,
    label,
  })
);

const NAV_ITEMS_TUPLES: [string, string][] = [
  ['/', HOME_LABEL],
  ['/resume', 'resume'],
  ['/projects', 'projects'],
  ['/blogs', 'blogs'],
  ['https://playground.yuxi.dev', 'playground'],
];
const NAV_ITEMS: ReadonlyArray<NavItem> = createNavItems(NAV_ITEMS_TUPLES);

export default function Heading() {
  const [navCollapse, setCollapse] = useLocalStorage(
    'yuxi-site-nav-collapsed',
    true
  );
  const { pathname } = useRouter();
  useEffect(() => {
    setCollapse(true);
  }, [pathname, setCollapse]);

  return (
    <div
      className={`flex justify-center print:hidden mx-auto max-w-2xl lg:max-w-5xl`}
    >
      <div
        className={`flex p-1 justify-start ${
          navCollapse ? 'items-center' : 'items-start'
        }`}
      >
        <Link href="/">
          <Image
            imageClassName="rounded-full"
            src={ProfilePicture}
            alt="profile-kinect-infra-red"
            width={48} // 48 to match the size of nav buttons for persistency
            height={48}
          />
        </Link>
      </div>
      <div className="flex-grow flex justify-center items-start">
        <Nav items={NAV_ITEMS} collapsed={navCollapse} />
      </div>
      <div
        className={`flex justify-end ${
          navCollapse ? 'items-center' : 'items-start'
        } print:hidden`}
      >
        <div className="p-1 sm:hidden">
          <NavToggle
            active={navCollapse}
            onClick={() => {
              setCollapse((v) => !v);
            }}
          />
        </div>
        <div className="p-1 flex items-center">
          <div className="hidden sm:inline">
            <RssFeedBtn />
          </div>

          <div className="inline sm:mx-2">
            <ThemePrefToggleBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
