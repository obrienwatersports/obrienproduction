import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import WhiteStackedLogo from './WhiteStackedLogo';
import Scroller from '../global/Scroller.client';

import {MediaFile} from '@shopify/hydrogen';

function ObrienHero({video}) {
  let backScroll = useRef(null);
  //let stickyFingaz = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(backScroll, {
      scrollTrigger: {
        trigger: '.video-contain',
        start: 'top top',
        scrub: 1,
      },
      duration: 2,
      x: '0',
      y: '160',
      ease: 'linear',
    });
  }, []);

  return (
    <div
      className="video-contain"
      id="obrienHero"
      ref={(el) => {
        backScroll = el;
      }}
    >
      {/* <video autoPlay muted loop playsInline id="bgvid">
        <source src="/2023_Website_Banner.mp4" type="video/mp4" />
      </video> */}
      <MediaFile
        data={video}
        className="test"
        controls={false}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="heroOverlay flex-vertical text-center">
        <div className="inside-xs">
          <WhiteStackedLogo />
        </div>
        <h2>
          The <span>2024</span> Product Line is Here
        </h2>
        <Scroller />
      </div>
    </div>
  );
}

export default ObrienHero;
