// https://towardsdatascience.com/extracting-colours-from-an-image-using-k-means-clustering-9616348712be
// https://en.wikipedia.org/wiki/K-means_clustering
// https://en.wikipedia.org/wiki/Lloyd%27s_algorithm

export const euclideanDistance = (a: number[], b: number[]) => {
  let sum = 0;

  // n차원까지 확장 가능. a와 b의 length는 같아야 함. 다시 말해 같은 차원의 좌표여야 함.
  for (let i = 0; i < a.length; i++) {
    // Math.pow(x,y), x의 y 제곱을 반환.
    sum += Math.pow(b[i] - a[i], 2);
  }

  // Math.sqrt(x) x:number의 제곱근을 반환.
  const distance = Math.sqrt(sum);

  return distance;
};

// console.log(euclideanDistance([0, 0, 0], [127, 127, 127]));
// console.log(euclideanDistance([0, 0, 0], [255, 255, 255]));
