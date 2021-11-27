import styled from 'styled-components';
import Link from 'next/link';
import PLarge from '../../../foundation/typography/p-large';
import AloneButton from '../../common-components/button/alone-button';
import { tType } from '../../../../type';

const ErrorCommon = ({ message }: { message: tType }) => {
  const btnText = { k: '홈으로', e: 'Go to Home' };

  return (
    <Main>
      <PLarge //
        text={message}
        color="gray2"
      />
      <Link href="/">
        <a>
          <AloneButton btnText={btnText} marginTop="24px" />
        </a>
      </Link>
    </Main>
  );
};

export default ErrorCommon;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 36vh;
`;
