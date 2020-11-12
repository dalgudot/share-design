// Fake users data
// const artworks = [

//   { id: '/images/1.jpg' },
//   { id: '/images/2.jpg' },
//   { id: '/images/3.jpg' },
// ];

const artworks = {
  artwork1: '/images/1.jpg',
  artwork2: '/images/2.jpg',
  artwork3: '/images/3.jpg',
  artwork4: '/images/4.jpg',
  artwork5: '/images/5.jpg',
  artwork6: '/images/6.jpg',
  artwork7: '/images/7.jpg',
  artwork8: '/images/8.jpg',
  artwork9: '/images/9.jpg',
};

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(artworks);
}
