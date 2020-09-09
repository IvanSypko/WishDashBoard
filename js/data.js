const user = {
  name: 'Ivan',
  surname: 'Sypko',
  userPhoto: '../images/my_photo_1.jpg',
  qrQode: '../images/qr-code.svg',
  dreams: [
    { src: '../images/amazon.jpg', alt: 'My IT company' },
    { src: '../images/home_at_the_sea.png', alt: 'House on the shore' },
    { src: '../images/voyage.jpg', alt: 'Own space voyage' },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  500,
  600,
  700,
  1000,
  1200,
  1500,
  2000,
  2100,
  2500,
  3000,
  4000,
  5000,
];

const necessaryExpenses = 600;

const todo = [
  { month: 'June', skill: 'Html' },
  { month: 'July', skill: 'Css' },
  { month: 'August', skill: 'JavaScript' },
  { month: 'September', skill: 'Pyton' },
  { month: 'October', skill: 'Unreal Engine' },
  { month: 'November', skill: 'English' },
  { month: 'December', skill: 'Freelance' },
  { month: 'January', skill: 'Hard skills' },
  { month: 'February', skill: 'Soft skills' },
  { month: 'March', skill: 'Own brand' },
  { month: 'April', skill: 'Finance management' },
  { month: 'May', skill: 'Networking' },
];

export { user, arr, necessaryExpenses, todo };
