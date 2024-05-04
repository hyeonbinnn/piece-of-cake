import carrotCake from '../assets/cake/carrot-cake.svg';
import cherryCake from '../assets/cake/cherry-cake.svg';
import chocoCake from '../assets/cake/choco-cake.svg';
import pinkCake from '../assets/cake/pink-cake.svg';
import strawberryCake from '../assets/cake/strawberry-cake.svg';
import vanillaCake from '../assets/cake/vanilla-cake.svg';
import darkCake from '../assets/cake/dark-cake.svg';
import raspberryCake from '../assets/cake/raspberry-cake.svg';
import saltyCake from '../assets/cake/salty-cake.svg';
import { CakeItemData } from '../types/data';

const cakeItem: CakeItemData[] = [
  {
    id: 1,
    name: 'carrot cake',
    cost: 7000,
    img: carrotCake,
    count: 5,
  },
  {
    id: 2,
    name: 'cherry cake',
    cost: 6000,
    img: cherryCake,
    count: 5,
  },
  {
    id: 3,
    name: 'choco cake',
    cost: 6500,
    img: chocoCake,
    count: 5,
  },
  {
    id: 4,
    name: 'pink cake',
    cost: 6000,
    img: pinkCake,
    count: 5,
  },
  {
    id: 5,
    name: 'strawberry cake',
    cost: 7500,
    img: strawberryCake,
    count: 5,
  },
  {
    id: 6,
    name: 'vanilla cake',
    cost: 7000,
    img: vanillaCake,
    count: 5,
  },
  {
    id: 7,
    name: 'dark cake',
    cost: 6000,
    img: darkCake,
    count: 5,
  },
  {
    id: 8,
    name: 'raspberry cake',
    cost: 6000,
    img: raspberryCake,
    count: 5,
  },
  {
    id: 9,
    name: 'salty cake',
    cost: 7000,
    img: saltyCake,
    count: 5,
  },
];

export default cakeItem;
