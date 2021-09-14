import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import TabIntroduction24 from '../../../foundation/svg/tab_introduction_24';
import TabContact24 from '../../../foundation/svg/tab_contact_24';
import TabRecord24 from '../../../foundation/svg/tab_record_24';
import PMedium from '../../../foundation/typography/p-medium';
import { mediaBreakPoint } from '../../../styles/common';
import TabProduct24 from '../../../foundation/svg/tab_product_24';

const ResponsiveNavBar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  // 임시 pathname
  const isShow: boolean =
    pathname === '/' ||
    pathname === '/product/share-palette' ||
    pathname === '/introduction' ||
    pathname === '/contact';

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
          {/* 임시 pathname */}
          <Link href="/product/share-palette">
            <a>
              <TabProduct24 pathname={pathname} />
              <PMedium
                text={{ k: '프로덕트', e: 'PRODUCT' }}
                color={
                  pathname === '/product/share-palette' ? 'gray0' : 'gray4'
                }
                weight={pathname === '/product/share-palette' ? 700 : 400}
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
        <NavBarSafeArea />
      </>
    );
  } else return <></>;
};

export default ResponsiveNavBar;

const Nav = styled.nav`
  position: fixed;

  // Properties that change
  margin-top: 58px;
  // 72px - 24px
  top: ${({ theme }) => theme.margin.DesktopTop};
  right: 4.5vw;

  p {
    margin-top: 24px;
    text-align: end;
  }

  @media all and (max-width: ${mediaBreakPoint.first}) {
    // iOS bottom safe area
    margin-bottom: calc(env(safe-area-inset-bottom));

    /* width: 100%; */
    height: 56px;
    z-index: ${({ theme }) => theme.zIndex.Bar};
    border-top: solid 1px ${({ theme }) => theme.gray7};
    background-color: ${({ theme }) => theme.gray9};
    /* margin-top: 0px; */
    top: unset;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-evenly;

    p {
      margin-top: 0px;
      text-align: center;
      font-size: 10px;
    }

    a {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 3px; // Visual Correction
    }
  }
`;

const NavBarSafeArea = styled.div`
  @media all and (max-width: ${mediaBreakPoint.first}) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.BarSafeArea};
    background-color: ${({ theme }) => theme.gray9};
    height: 55px; // status 바 가리면서 header height를 넘지 않음
  }
`;
