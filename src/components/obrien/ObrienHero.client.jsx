import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

function ObrienHero() {
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
      ref={(el) => {
        backScroll = el;
      }}
    >
      <video autoPlay="autoplay" muted loop="loop" id="bgvid">
        <source src="/Paddle-Bar-Hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default ObrienHero;
