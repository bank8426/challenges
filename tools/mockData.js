const charities = [
  {
    id: 1,
    name: 'Baan Kru Noi',
    image: 'baan-kru-noi.jpg',
    currency: 'THB',
  },
  {
    id: 2,
    name: 'Habitat for Humanity Thailand',
    image: 'habitat-for-humanity-thailand.jpg',
    currency: 'THB',
  },
  {
    id: 3,
    name: 'Paper Ranger',
    image: 'paper-ranger.jpg',
    currency: 'THB',
  },
  {
    id: 4,
    name: 'Makhampom Theater',
    image: 'makhampom-theater.jpg',
    currency: 'THB',
  },
  {
    id: 5,
    name: 'Thailand Association of the Blind',
    image: 'thailand-association-of-the-blind.jpg',
    currency: 'THB',
  },
]
const payments = [
  {
    charitiesId: 2,
    amount: 10,
    currency: 'THB',
    id: 1,
  },
  {
    charitiesId: 1,
    amount: 20,
    currency: 'THB',
    id: 2,
  },
  {
    charitiesId: 3,
    amount: 50,
    currency: 'THB',
    id: 3,
  },
  {
    charitiesId: 4,
    amount: 100,
    currency: 'THB',
    id: 4,
  },
  {
    charitiesId: 2,
    amount: 500,
    currency: 'THB',
    id: 5,
  },
  {
    charitiesId: 5,
    amount: 500,
    currency: 'THB',
    id: 6,
  },
]
module.exports = {
  charities,
  payments,
};
