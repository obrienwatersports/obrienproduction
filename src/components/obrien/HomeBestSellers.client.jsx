import PinLogoOnly from './PinLogoOnly';
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import BestSellerScreamer from './bestsellers/BestSellerScreamer.client';
import BestSellerBlackMagic from './bestsellers/BestSellerBlackMagic.client';
import BestSellerCelebrity from './bestsellers/BestSellerCelebrity.client';
import BestSellerEasyRider from './bestsellers/BestSellerEasyRider.client';
import BestSellerWomensTraditional from './bestsellers/BestSellerWomensTraditional.client';
import BestSellerMensTraditional from './bestsellers/BestSellerMensTraditional.client';
import BestSellerFreeboard from './bestsellers/BestSellerFreeboard.client';
import BestSellerWaterCarpet from './bestsellers/BestSellerWaterCarpet.client';
import BestSellerSystem from './bestsellers/BestSellerSystem.client';
// import {Link as LinkScroll} from 'react-scroll';
// import {Link} from '@shopify/hydrogen';

export default function HomeBestSellers() {
  let animateThis5 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis5, {
      scrollTrigger: {
        trigger: animateThis5,
        //markers: true,
        start: '300 bottom',
        end: '500 top',
        toggleClass: 'enable',
      },
      duration: 2,
    });
  });

  return (
    <section id="bestsellers" className="grayBack">
      <div className="inside-sm homeSlidePadd">
        <header
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
        </header>
      </div>
      <div className="inside-xxl">
        <div className="auto-grid">
          <BestSellerScreamer />
          <BestSellerWomensTraditional />
          <BestSellerCelebrity />
          <BestSellerBlackMagic />
          <BestSellerMensTraditional />
          <BestSellerEasyRider />
          <BestSellerFreeboard />
          <BestSellerSystem />
          <BestSellerWaterCarpet />
        </div>
      </div>
    </section>
  );
}
