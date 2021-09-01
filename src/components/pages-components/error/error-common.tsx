import styled from 'styled-components';
import Link from 'next/link';
import { t } from '../../../data/index/t-index';
import PLarge from '../../../foundation/typography/p-large';
import AloneButton from '../../common-components/button/alone-button';

const ErrorCommon = () => {
  return (
    <Main>
      <PLarge //
        text={t.errorMessage.message}
        color="gray2"
      />
      <Link href="/">
        <a>
          <AloneButton btnText={t.errorMessage.btn} marginTop="24px" />
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
