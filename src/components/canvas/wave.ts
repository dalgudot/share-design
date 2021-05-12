export const Wave = (i: number, totalPoints: number, color: string) => {
  // console.log(i, totalPoints, color);

  const WaveResize = (stageWidth: number, stageHeight: number) => {
    console.log(`WaveResize[${i}]`);
  };

  return { WaveResize };
};
