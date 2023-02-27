import type { NavDataT, BannerT, SortOptT, BooleanObjectT } from 'types';

import { goodFood, badFood, averageFood } from 'assets';

export const NAV_DATA: NavDataT[] = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Menu', path: '/menu' },
  { id: 3, title: 'About Us', path: '/' },
  { id: 4, title: 'Contact Us', path: '/' }
];

export const BANNER_DATA: BannerT[] = [
  {
    id: 1,
    text: 'Hey, not all tomatoes have lost their taste. Do you want me to put them?',
    path: '/menu/high',
    image: goodFood,
    color: 'green'
  },
  {
    id: 2,
    text: 'If an average quality is enough, you came to the right place.',
    path: '/menu/medium',
    image: averageFood,
    color: 'orange'
  },
  {
    id: 3,
    text: 'I have some edible things if you only intend to fill up your stomach and survive.',
    path: '/menu/low',
    image: badFood,
    color: 'red'
  }
];

export const sortOptions: SortOptT[] = [
  { name: 'Default', value: 'default' },
  { name: 'Name (A-Z)', value: 'az' },
  { name: 'Name (Z-A)', value: 'za' },
  { name: 'Price(High Q.)-increasing', value: 'highI' },
  { name: 'Price(High Q.)-decreasing', value: 'highD' },
  { name: 'Price(Medium Q.)-increasing', value: 'mediumI' },
  { name: 'Price(Medium Q.)-decreasing', value: 'mediumD' },
  { name: 'Price(Low Q.)-increasing', value: 'lowI' },
  { name: 'Price(Low Q.)-decreasing', value: 'lowD' }
];

export const filterOptions: BooleanObjectT = {
  vegan: false,
  vegetarian: false
};

export const menuPages: string[] = ['custom', 'high', 'medium', 'low'];
