import styled from 'styled-components';
import Link from 'next/link';
import { t } from '../../../data/index/t';
import PMedium400 from '../../../foundation/typography/p-medium-400';
import AloneButton from '../../button/alone-button';

const ErrorCommon = () => {
  const btnText = t.errorMessage.btn;

  return (
    <Main>
      <PMedium400 //
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
