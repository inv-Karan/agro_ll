import aboutImage from './img/intro_img/1.jpg';
import serviceImage from './img/intro_img/8.jpg';
import featureImage from './img/intro_img/11.jpg';
import contactImage from './img/intro_img/7.jpg';
import homeImage from './img/home_img/img_1.jpg';

const indexList = [{
    text: 'Home 1',
    link: 'index.html'
  },
  {
    text: 'Home 2',
    link: 'index_2.html'
  },
  {
    text: 'Home 3',
    link: 'index_3.html'
  },
  {
    text: 'Home Shop',
    link: 'index_4.html'
  }
];

const serviceList = [{
    text: 'Services',
    link: 'services.html'
  },
  {
    text: 'Features',
    link: 'features.html'
  },
  {
    text: 'Features Details',
    link: 'Featuress_details.html'
  },
  {
    text: 'Gallery 1',
    link: 'gallery_1.html'
  },
  {
    text: 'Gallery 2',
    link: 'gallery_2.html'
  },
  {
    text: 'Typography',
    link: 'typography.html'
  },
  {
    text: '404 page',
    link: '404.html'
  }
];

const featuresList = [{
    text: 'Shop Catalog',
    link: 'shop_catalog.html'
  },
  {
    text: 'Single Features',
    link: 'single_Features.html'
  },
  {
    text: 'Cart',
    link: 'cart.html'
  },
  {
    text: 'Checkout',
    link: 'checkout.html'
  },
  {
    text: 'Sign In/Up',
    link: 'sign_in.html'
  }
];

const Tag = [{
    header: 'Home',
    link: '/',
    list: indexList,
    
  },
  {
    header: 'About',
    link: '/about',
    
  },
  {
    header: 'Services',
    link: '/service',
    list: serviceList,
    
  },
  {
    header: 'Features',
    link: '/feature',
    list: featuresList,
    
  },
  {
    header: 'Contacts',
    link: '/contact',
    
  },
];

let pages = [
  {
    header: 'About',
    subHeader: 'Company',
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    imageUrl: aboutImage
  },
  {
    header: 'MY FARM EASY',
    subHeader: 'SERVICES',
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    imageUrl: serviceImage
  },
  {
    header: 'MAJOR',
    subHeader: 'FEATURES',
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    imageUrl: featureImage
  },
  {
    header: 'MY FARM EASY',
    subHeader: 'CONTACT US',
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    imageUrl: contactImage
  },
  {
    header: 'MY FARM EASY',
    subHeader: 'FARMING COMPANY',
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    imageUrl: homeImage
  }
];

let address = [
    {
        region: 'PS Techy Nerds, Aastha Niwas, Zirakpur, Punjab, India (140603)',
        contact: '+91 79737 88196',
        website: 'mailto:support@myfarmeasy.com',
        text: 'support@myfarmeasy.com'
    },
];

export {
  Tag, pages, address
};