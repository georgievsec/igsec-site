window.onload = () => {
  const globeContainer = document.getElementById('globeViz');
  const Globe = window.Globe;

  const globe = Globe()(globeContainer)
    .globeImageUrl('assets/earth-dark.jpg')
    .backgroundColor('rgba(0,0,0,0)')
    .arcColor(() => ['#ff6f61', '#00bcd4'][Math.floor(Math.random() * 2)])
    .arcDashLength(0.4)
    .arcDashGap(2)
    .arcDashInitialGap(() => Math.random() * 5)
    .arcDashAnimateTime(2000)
    .arcStroke(1.2)
    .arcsTransitionDuration(0)
    .showAtmosphere(true)
    .atmosphereColor('#3aafff')
    .atmosphereAltitude(0.25);

  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.5;

  function generateArcs() {
    return [...Array(80).keys()].map(() => {
      const startLat = (Math.random() - 0.5) * 180;
      const startLng = (Math.random() - 0.5) * 360;
      const endLat = (Math.random() - 0.5) * 180;
      const endLng = (Math.random() - 0.5) * 360;
      return { startLat, startLng, endLat, endLng };
    });
  }

  setInterval(() => {
    globe.arcsData(generateArcs());
  }, 4000);

  globe.arcsData(generateArcs());
};