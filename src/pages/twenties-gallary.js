import HeadInfo from "../components/head-info";
import { twentiesInfo } from "../components/text/head-info-text";
import LangChangeButton from "../components/button/lang-change-button";
import { k } from "../components/lang/twenties-gallary/ko-twenties";
import { e } from "../components/lang/twenties-gallary/en-twenties";
import { useSelector } from "react-redux";
import TwentiesText from "../components/text-component/twenties-text";
import TwentiesParallaxText from "../components/text-component/twenties-parallax-text";
import ArtworkTwenties from "../components/img-component/artwork-twenties";

const TwentiesGallary = () => {
  const lang = useSelector((state) => state.language);

  return (
    <>
      <HeadInfo info={twentiesInfo} />

      <LangChangeButton />

      <TwentiesText textOne={`${lang}` === "ko" ? k.twenty : e.twenty} />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.flutter : e.flutter}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.iAmTwenties : e.iAmTwenties}
        textTwo={`${lang}` === "ko" ? k.like : e.like}
      />

      <TwentiesParallaxText textOne={`${lang}` === "ko" ? k.but : e.but} />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.twentiesIs : e.twentiesIs}
        textTwo={`${lang}` === "ko" ? k.different : e.different}
      />

      <ArtworkTwenties src="/images/1.jpg" />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.likeThis : e.likeThis}
        textTwo={`${lang}` === "ko" ? k.myTwenties : e.myTwenties}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.over : e.over}
        textTwo={`${lang}` === "ko" ? k.whatIf : e.whatIf}
      />

      <ArtworkTwenties src="/images/2.jpg" />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.whatwill : e.whatwill}
        textTwo={`${lang}` === "ko" ? k.future : e.future}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.anxious : e.anxious}
      />

      <ArtworkTwenties src="/images/3.jpg" />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.nothing : e.nothing}
        textTwo={`${lang}` === "ko" ? k.decide : e.decide}
      />

      <ArtworkTwenties src="/images/4.jpg" />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.choice : e.choice}
        textTwo={`${lang}` === "ko" ? k.right : e.right}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.ok : e.ok}
        textTwo={`${lang}` === "ko" ? k.toDoThis : e.toDoThis}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.thisRoad : e.thisRoad}
        textTwo={`${lang}` === "ko" ? k.rightRoad : e.rightRoad}
      />

      <TwentiesParallaxText textOne={`${lang}` === "ko" ? k.lost : e.lost} />

      <ArtworkTwenties src="/images/5.jpg" />

      <TwentiesParallaxText textOne={`${lang}` === "ko" ? k.me : e.me} />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.run : e.run}
        textTwo={`${lang}` === "ko" ? k.toward : e.toward}
      />

      <TwentiesParallaxText textOne={`${lang}` === "ko" ? k.medo : e.medo} />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.doing : e.doing}
        textTwo={`${lang}` === "ko" ? k.now : e.now}
      />

      <ArtworkTwenties src="/images/6.jpg" />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.maybe : e.maybe}
        textTwo={`${lang}` === "ko" ? k.justRun : e.justRun}
      />

      <TwentiesParallaxText textOne={`${lang}` === "ko" ? k.notMe : e.notMe} />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.eyesOfOthers : e.eyesOfOthers}
        textTwo={`${lang}` === "ko" ? k.inTheEyes : e.inTheEyes}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.living : e.living}
        textTwo={`${lang}` === "ko" ? k.thanMe : e.thanMe}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.that : e.that}
        textTwo={`${lang}` === "ko" ? k.forMe : e.forMe}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.so : e.so}
        textTwo={`${lang}` === "ko" ? k.sorry : e.sorry}
        textThree={`${lang}` === "ko" ? k.not : e.not}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.little : e.little}
        textTwo={`${lang}` === "ko" ? k.beOkay : e.beOkay}
      />

      <ArtworkTwenties src="/images/7.jpg" />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.beautiful : e.beautiful}
        textTwo={`${lang}` === "ko" ? k.beautifulTwenties : e.beautifulTwenties}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.inMyTwenties : e.inMyTwenties}
        textTwo={`${lang}` === "ko" ? k.liveForMe : e.liveForMe}
      />

      <TwentiesParallaxText textOne={`${lang}` === "ko" ? k.toMe : e.toMe} />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.notToBeSorry : e.notToBeSorry}
      />

      <ArtworkTwenties src="/images/8.jpg" />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.whatIsThat : e.whatIsThat}
        textTwo={`${lang}` === "ko" ? k.difficult : e.difficult}
      />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.aLittle : e.aLittle}
        textTwo={`${lang}` === "ko" ? k.letItBe : e.letItBe}
      />

      <ArtworkTwenties src="/images/9.jpg" />

      <TwentiesParallaxText
        textOne={`${lang}` === "ko" ? k.twentiesYou : e.twentiesYou}
      />
    </>
  );
};

export default TwentiesGallary;
