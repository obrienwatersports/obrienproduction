//import PinLogoOnly from './PinLogoOnly';
// import {useRef, useEffect} from 'react';
// import {gsap} from 'gsap';
// import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import BestSellerScreamer from './bestsellers/BestSellerScreamer.client';
import BestSellerBlackMagic from './bestsellers/BestSellerBlackMagic.client';
import BestSellerCelebrity from './bestsellers/BestSellerCelebrity.client';
import BestSellerEasyRider from './bestsellers/BestSellerEasyRider.client';
import BestSellerWomensTraditional from './bestsellers/BestSellerWomensTraditional.client';
import BestSellerFreeboard from './bestsellers/BestSellerFreeboard.client';
import BestSellerWaterCarpet from './bestsellers/BestSellerWaterCarpet.client';
import BestSellerSystem from './bestsellers/BestSellerSystem.client';
// import {Link as LinkScroll} from 'react-scroll';
// import {Link} from '@shopify/hydrogen';

export default function HomeBestSellers({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
}) {
  // let animateThis5 = useRef(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.to(animateThis5, {
  //     scrollTrigger: {
  //       trigger: animateThis5,
  //       //markers: true,
  //       start: '300 bottom',
  //       end: '500 top',
  //       toggleClass: 'enable',
  //     },
  //     duration: 2,
  //   });
  // });

  return (
    <section id="bestsellers" className="grayBack">
      <div className="inside-sm homeSlidePadd">
        {/* <header
          className="fadeIn aLittlePadd"
          ref={(el5) => {
            animateThis5 = el5;
          }}
        >
          <div className="notWhite">
            <PinLogoOnly />
          </div>
          <h2>
            What We Do <span>Best</span>
          </h2>
          <p>
            In 1964 we built our first Waterski, Our passion for watersports has
            revolutionized the industry not only with waterskis, but wakeboards,
            wakesurf boards, stand up paddleboards, tubes, and life jackets as
            well. Here are some samples of what we do best!
          </p>
        </header> */}
      </div>
      <div className="inside-xxl">
        <div className="auto-grid-home">
          <BestSellerScreamer image1={image1} />
          <BestSellerWomensTraditional image2={image2} />
          <BestSellerSystem image3={image3} />
          <BestSellerCelebrity image4={image4} />
          <BestSellerBlackMagic image5={image5} />
          <BestSellerWaterCarpet image6={image6} />
          <BestSellerEasyRider image7={image7} />
          <BestSellerFreeboard image8={image8} />
        </div>
      </div>
    </section>
  );
}
