// Fake users data
// const artworks = [

//   { id: '/images/1.jpg' },
//   { id: '/images/2.jpg' },
//   { id: '/images/3.jpg' },
// ];

const artworks = { id: '/images/1.jpg' };

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(artworks);
}
