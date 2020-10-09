import HeadInfo from "../components/head-info";
import { twentiesInfo } from "../components/lang/head-info/head-info-text";
import LangChangeButton from "../components/button/lang-change-button";
import TwentiesText from "../components/text-component/twenties-text";
import TwentiesParallaxText from "../components/text-component/twenties-parallax-text";
import ArtworkTwenties from "../components/img-component/artwork-twenties";
import ScrollDownAnimaition from "../components/animation/scoll-down";

const TwentiesGallary = () => {
  return (
    <>
      <HeadInfo info={twentiesInfo} />

      <LangChangeButton />

      <TwentiesText textOne="twenty" />

      <ScrollDownAnimaition />

      <TwentiesParallaxText textOne="flutter" />

      <TwentiesParallaxText textOne="iAmTwenties" textTwo="like" />

      <TwentiesParallaxText textOne="but" />

      <TwentiesParallaxText textOne="twentiesIs" textTwo="different" />

      <ArtworkTwenties src="/images/1.jpg" alt="alt1" />

      <TwentiesParallaxText textOne="likeThis" textTwo="myTwenties" />

      <TwentiesParallaxText textOne="over" textTwo="whatIf" />

      <ArtworkTwenties src="/images/2.jpg" alt="alt2" />

      <TwentiesParallaxText textOne="whatwill" textTwo="future" />

      <TwentiesParallaxText textOne="anxious" />

      <ArtworkTwenties src="/images/3.jpg" alt="alt3" />

      <TwentiesParallaxText textOne="nothing" textTwo="decide" />

      <ArtworkTwenties src="/images/4.jpg" alt="alt4" />

      <TwentiesParallaxText textOne="choice" textTwo="right" />

      <TwentiesParallaxText textOne="ok" textTwo="toDoThis" />

      <TwentiesParallaxText textOne="thisRoad" textTwo="rightRoad" />

      <TwentiesParallaxText textOne="lost" />

      <ArtworkTwenties src="/images/5.jpg" alt="alt5" />

      <TwentiesParallaxText textOne="me" />

      <TwentiesParallaxText textOne="run" textTwo="toward" />

      <TwentiesParallaxText textOne="medo" />

      <TwentiesParallaxText textOne="doing" textTwo="now" />

      <ArtworkTwenties src="/images/6.jpg" alt="alt6"/>

      <TwentiesParallaxText textOne="maybe" textTwo="justRun" />

      <TwentiesParallaxText textOne="notMe" />

      <TwentiesParallaxText textOne="eyesOfOthers" textTwo="inTheEyes" />

      <TwentiesParallaxText textOne="living" textTwo="thanMe" />

      <TwentiesParallaxText textOne="that" textTwo="forMe" />

      <TwentiesParallaxText textOne="so" textTwo="sorry" textThree="not" />

      <ArtworkTwenties src="/images/7.jpg" alt="alt7" />

      <TwentiesParallaxText textOne="little" textTwo="beOkay" />

      <TwentiesParallaxText textOne="beautiful" textTwo="beautifulTwenties" />

      <TwentiesParallaxText textOne="inMyTwenties" textTwo="liveForMe" />

      <TwentiesParallaxText textOne="toMe" />

      <TwentiesParallaxText textOne="notToBeSorry" />

      <ArtworkTwenties src="/images/8.jpg" alt="alt8"/>

      <TwentiesParallaxText textOne="whatIsThat" textTwo="difficult" />

      <TwentiesParallaxText textOne="aLittle" textTwo="letItBe" />

      <ArtworkTwenties src="/images/9.jpg" alt="alt9"/>

      <TwentiesParallaxText textOne="twentiesYou" />
    </>
  );
};

export default TwentiesGallary;
