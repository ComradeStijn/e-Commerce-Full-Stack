import "../assets/nav.scss";
import "./home.scss";
import "./fadein.js";
import "./slider.js";

import heroImgURL from "../assets/hero.jpg";

document.querySelector("#hero-img").src = heroImgURL;

import phoneImgUrl from "../assets/phone.jpg";
import tabletImgUrl from "../assets/tablet.jpg";
import pcImgUrl from "../assets/pc.jpg";
import watchImgUrl from "../assets/smartwatch.jpg";

document.querySelector("#product-phone img").src = phoneImgUrl;
document.querySelector("#product-tablet img").src = tabletImgUrl;
document.querySelector("#product-pc img").src = pcImgUrl;
document.querySelector("#product-smartwatch img").src = watchImgUrl;

import iphoneImg from "../assets/iphone.jpg";
import zflipImg from "../assets/zflip.jpg";
import macbookImg from "../assets/macbook.jpg";

document.querySelector("#iphone").src = iphoneImg;
document.querySelector("#zflip").src = zflipImg;
document.querySelector("#macbook").src = macbookImg;
