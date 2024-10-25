import "./home.scss";
import "./fadein.js";

import heroImgURL from '../assets/hero.jpg';

document.querySelector('#hero-img').src = heroImgURL;

import phoneImgUrl from '../assets/phone.jpg';
import tabletImgUrl from '../assets/tablet.jpg';
import pcImgUrl from '../assets/pc.jpg';
import watchImgUrl from '../assets/smartwatch.jpg';

document.querySelector('#product-phone img').src = phoneImgUrl;
document.querySelector('#product-tablet img').src = tabletImgUrl;
document.querySelector('#product-pc img').src = pcImgUrl;
document.querySelector('#product-smartwatch img').src = watchImgUrl;

