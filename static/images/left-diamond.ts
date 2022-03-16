import { html, TemplateResult } from 'lit';

export const leftDiamond = (): TemplateResult => {
  return html`
    <svg
       width="80"
       height="160"
       viewBox="0 0 80 160"
       version="1.1"
       id="left"
       sodipodi:docname="left-diamond-bare.svg"
       inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20, custom)"
       xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
       xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:svg="http://www.w3.org/2000/svg">
      <defs
         id="defs10" />
      <sodipodi:namedview
         id="namedview8"
         pagecolor="#ffffff"
         bordercolor="#666666"
         borderopacity="1.0"
         inkscape:pageshadow="2"
         inkscape:pageopacity="0.0"
         inkscape:pagecheckerboard="0"
         showgrid="false"
         inkscape:zoom="4.155"
         inkscape:cx="80.024067"
         inkscape:cy="80.024067"
         inkscape:window-width="1920"
         inkscape:window-height="1023"
         inkscape:window-x="0"
         inkscape:window-y="33"
         inkscape:window-maximized="1"
         inkscape:current-layer="svg6" />
       <path
          id="left-diamond-stroke"
          fill="black"
          d="M 75,0 C 75,15.357127 64.554862,34.624825 49.589844,49.589844 34.624825,64.554862 15.357127,75 0,75 v 5.103516 C 34.955098,79.827041 80,34.892228 80,0 Z M 0,80.130859 V 85 C 15.357127,85 34.624825,95.445134 49.589844,110.41016 64.554862,125.37517 75,144.64287 75,160 h 5 C 80,125.10777 34.955098,80.405894 0,80.130859 Z" />
      <path
         id="left-diamond-fill"
         fill="white"
         d="m 80,0 c 0,35 -45,80 -80,80 35,0 80,45 80,80 z" />
    </svg>
  `
}
