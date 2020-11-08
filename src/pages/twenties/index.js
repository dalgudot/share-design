import Link from 'next/link';

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

export async function getStaticProps({ params }) {
  return { props: { src1: '/images/1.jpg', src2: '/images/2.jpg' } };
}
