import styled from 'styled-components';
import HeadInfo from '../../components/head-info';
import { twentiesInfo } from '../../components/lang/head-info/head-info-text';
import { useState } from 'react';
import ArtworkView from '../../components/twenties/view/artwork-view';
import LangChangeButton from '../../components/button/lang-change-button';
import { useSelector } from 'react-redux';
import useSwr from 'swr';

const Artwork = () => {
  const lang = useSelector((state) => state.language);
  const [pageNum, setPageNum] = useState(4);
  console.log(`TwentiesPageNum: ${pageNum}`);

  const next = () => {
    setPageNum(pageNum + 1);
  };

  const prev = () => {
    setPageNum(pageNum - 1);
  };

  const fetcher = (artworks) => fetch(artworks).then((res) => res.json());
  const { data, error } = useSwr('/api/artworks', fetcher);

  console.log(data);
  if (error) return <h1>Failed to load users</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <HideImage>
        <img src={data.artwork1} />
        <img src={data.artwork2} />
        <img src={data.artwork3} />
        <img src={data.artwork4} />
        <img src={data.artwork5} />
        <img src={data.artwork6} />
        <img src={data.artwork7} />
        <img src={data.artwork8} />
        <img src={data.artwork9} />
      </HideImage>
      <HeadInfo info={twentiesInfo} />
      <LangChangeButton />

      <Aligncenter>
        <ArtworkView pageNum={pageNum} lang={lang} data={data} />

        {pageNum !== 1 && <ButtonPrev onClick={prev}>&lt;</ButtonPrev>}

        <ButtonNext onClick={next}>&gt;</ButtonNext>
      </Aligncenter>
    </>
  );
};

export default Artwork;

const HideImage = styled.div`
  opacity: 0;
`;

const ButtonPrev = styled.button`
  position: absolute;
  opacity: 0.8;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  opacity: 0.3;

  @media all and (max-width: 650px) {
    left: 72px;
    bottom: 72px;
  }

  @media all and (min-width: 651px) {
    left: 3vw;
    top: 47%;
  }

  /* @media all and (min-width: 700px) {
    right: 24px;
    top: 50%;
    trasform: translateY(-50%);
  } */
`;

const Aligncenter = styled.section`
  @media all and (min-width: 651px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonNext = styled.button`
  position: absolute;
  opacity: 0.8;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 36px;
  opacity: 0.3;

  @media all and (max-width: 650px) {
    right: 72px;
    bottom: 72px;
  }

  @media all and (min-width: 651px) {
    right: 3vw;
    top: 47%;
  }

  /* @media all and (min-width: 700px) {
    right: 24px;
    top: 50%;
    trasform: translateY(-50%);
  }*/
`;
