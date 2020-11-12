import Link from 'next/link';
import useSwr from 'swr';
import TwentiesArtwork from '../../components/twenties/img-component/twenties-artwork';

const Index = () => {
  return (
    <>
      <h1>
        <Link href="/twenties/artwork">
          <a>갤러리 입장하기</a>
        </Link>
      </h1>
    </>
  );
};

export default Index;
