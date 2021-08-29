import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import TabIntroduction24 from '../../../foundation/svg/tab_introduction_24';
import TabContact24 from '../../../foundation/svg/tab_contact_24';
import TabRecord24 from '../../../foundation/svg/tab_record_24';
import PMedium from '../../../foundation/typography/p-medium';
import { mediaBreakPoint } from '../../../styles/common';

const ResponsiveNavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const isShow: boolean =
    pathname === '/' || pathname === '/introduction' || pathname === '/contact';

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
          <Link href="/introduction">
            <a>
              <TabIntroduction24 pathname={pathname} />
              <PMedium
                text={{ k: '프로젝트 소개', e: 'PROJECT INTRO' }}
                color={pathname === '/introduction' ? 'gray0' : 'gray4'}
                weight={pathname === '/introduction' ? 700 : 400}
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
  margin-top: 58px; // 72px - 24px
  top: ${({ theme }) => theme.margin.DesktopTop};
  right: 4.5vw;

  p {
    margin-top: 24px;
    text-align: end;
  }

  @media all and (max-width: ${mediaBreakPoint.first}) {
    width: 100%;
    height: 56px;
    z-index: ${({ theme }) => theme.zIndex.Bar};
    border-top: solid 1px ${({ theme }) => theme.gray7};
    background-color: ${({ theme }) => theme.gray9};
    margin-top: 0;
    top: unset;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-evenly;

    p {
      margin-top: 4px;
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
