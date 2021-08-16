import styled from 'styled-components';
import Link from 'next/link';
import { t } from '../../../data/index/t';
import PLarge from '../../../foundation/typography/p-medium';
import AloneButton from '../../button/alone-button';

const ErrorCommon = () => {
  const btnText = t.errorMessage.btn;

  return (
    <Main>
      <PLarge //
        text={t.errorMessage.message}
        color="gray2"
      />
      <Link href="/">
        <a>
          <AloneButton size="medium" btnText={btnText} marginTop="24px" />
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
