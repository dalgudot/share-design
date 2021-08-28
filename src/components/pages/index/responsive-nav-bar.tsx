import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import TabAbout24 from '../../../foundation/svg/tab_about_24';
import TabContact24 from '../../../foundation/svg/tab_contact_24';
import TabRecord24 from '../../../foundation/svg/tab_record_24';
import PMedium from '../../../foundation/typography/p-medium';
import { mediaBreakPoint } from '../../../styles/common';

const ResponsiveNavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const isShow: boolean =
    pathname === '/' || pathname === '/about' || pathname === '/contact';

  const stringMediaBreakPoint = mediaBreakPoint.first.replace('px', '');
  const breakPoint: number = +stringMediaBreakPoint;

  if (isShow) {
    return (
      <>
        <Nav>
          <Link href="/">
            <a>
              <TabRecord24 pathname={pathname} />

              <PMedium
                text={{ k: '기록', e: 'RECORD' }}
                color={pathname === '/' ? 'gray0' : 'gray4'}
                weight={pathname === '/' ? 700 : 400}
              />
            </a>
          </Link>
          <Link href="/about">
            <a>
              <TabAbout24 pathname={pathname} />

              <PMedium
                text={{ k: '프로젝트 소개', e: 'ABOUT PROJECT' }}
                color={pathname === '/about' ? 'gray0' : 'gray4'}
                weight={pathname === '/about' ? 700 : 400}
              />
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <TabContact24 pathname={pathname} />

              <PMedium
                text={{ k: '연락처', e: 'CONTACT' }}
                color={pathname === '/contact' ? 'gray0' : 'gray4'}
                weight={pathname === '/contact' ? 700 : 400}
              />
            </a>
          </Link>
        </Nav>
      </>
    );
  } else return <></>;
};

export default ResponsiveNavBar;

const Nav = styled.nav`
  position: fixed;

  // Properties that change
  top: 125px; // 145-24 + 4(4는 시각 보정)
  right: 4.5vw;

  p {
    padding-top: 24px;
    text-align: end;
  }

  @media all and (max-width: ${mediaBreakPoint.first}) {
    width: 100%;
    height: 56px;
    z-index: ${({ theme }) => theme.zIndex.Bar};
    border-top: solid 1px ${({ theme }) => theme.gray7};
    background-color: ${({ theme }) => theme.gray9};
    top: unset;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;

    p {
      padding-top: 4px;
      text-align: center;
      font-size: 10px;
    }

    a {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    // iOS bottom safe area
    margin-bottom: calc(env(safe-area-inset-bottom));
  }
`;
