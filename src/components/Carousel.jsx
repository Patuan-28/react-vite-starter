import { useEffect } from 'react';
import "../Carousel.css"

export default function Carousel() {
  useEffect(() => {
    let radius = 240;
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 120;
    const imgHeight = 170;

    const odrag = document.getElementById('drag-container');
    const ospin = document.getElementById('spin-container');
    const aImg = ospin.getElementsByTagName('img');
    const aVid = ospin.getElementsByTagName('video');
    const aEle = [...aImg, ...aVid];
    const ground = document.getElementById('ground');

    ospin.style.width = imgWidth + 'px';
    ospin.style.height = imgHeight + 'px';
    ground.style.width = radius * 3 + 'px';
    ground.style.height = radius * 3 + 'px';

    function init(delayTime) {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        aEle[i].style.transition = 'transform 1s';
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';
      }
    }

    function applyTransform(obj) {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;
      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = yes ? 'running' : 'paused';
    }

    let sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      sX = e.clientX;
      sY = e.clientY;

      document.onpointermove = function (e) {
        e = e || window.event;
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(odrag);
        sX = nX;
        sY = nY;
      };

      document.onpointerup = function () {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        document.onpointermove = document.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      const d = e.wheelDelta / 20 || -e.detail;
      radius += d;
      init(1);
    };

    setTimeout(init, 1000);
  }, []);
  return (
    <section id="carousel" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      {/* Kontainer 3D */}
      <div id="drag-container">
        <div id="spin-container">
          <img src="/vite.svg" alt="Logo Vite" />
          <img src="/vite.svg" alt="Logo Vite" />
          <img src="/vite.svg" alt="Logo Vite" />
          <p>Choose</p>
        </div>
        <div id="ground"></div>
      </div>

      <div id="music-container"></div>
    </section>
  );
}