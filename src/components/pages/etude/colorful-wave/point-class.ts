export class PointClass {
  x: number;
  y: number;
  fixedY: number;
  speed: number;
  cur: number;
  max: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = 0;
    this.max = Math.random() * 100 + 150;
    // console.log('max', this.max);
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}

// import styled from 'styled-components';

// const Point = ({ X, Y }: { X: number; Y: number }) => {
//   const x = X;
//   const y = Y;
//   const fixedY = Y;
//   const speed = 0.1;
//   const cur = 0;
//   const max = Math.random() * 100 + 150;

//   console.log('max', max);

//   useOnUpdate()

//   return <></>;
// };

// export default Point;
