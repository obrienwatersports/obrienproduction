import PinLogoOnly from './PinLogoOnly';
import {useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import ActivitiesWakeboarding from './activities/Wakeboarding.client';
import ActivitiesWakesurfing from './activities/Wakesurfing.client';

const responsiveSettings = [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];

export default function HomeActivities() {
  let animateThis20 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(animateThis20, {
      scrollTrigger: {
        trigger: animateThis20,
        //markers: true,
        start: '100 bottom',
        end: '1200 top',
        toggleClass: 'enable',
      },
      duration: 2,
    });
  });
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
    <section id="activities" className="grayBack">
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
            Putting the <span>Sports</span> in Watersports
          </h2>
          <p>
            In 1964 we built our first Waterski, Our passion for watersports has
            revolutionized the industry not only with waterskis, but wakeboards,
            wakesurf boards, stand up paddleboards, tubes, and life jackets as
            well.
          </p>
        </header>
      </div>
      <div className="homeSlidePadd">
        <div
          className="productGrid homeSlider fadeIn"
          ref={(el20) => {
            animateThis20 = el20;
          }}
        >
          <Slide
            slidesToScroll={1}
            slidesToShow={1}
            indicators={true}
            responsive={responsiveSettings}
            autoplay={false}
          >
            <ActivitiesWakeboarding />
            <ActivitiesWakesurfing />
            <ActivitiesWakeboarding />
            <ActivitiesWakesurfing />
            <ActivitiesWakeboarding />
            <ActivitiesWakesurfing />
          </Slide>
        </div>
      </div>
    </section>
  );
}
