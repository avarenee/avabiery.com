import { html, TemplateResult } from 'lit';

export const rightDiamond = (): TemplateResult => {
  return html`
    <svg
       width="80"
       height="160"
       version="1.1"
       viewBox="0 0 80 160"
       id="right"
       sodipodi:docname="right-diamond-bare.svg"
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
          id="right-diamond-stroke"
          fill="black"
          d="M 5,0 C 5,15.357127 15.445138,34.624825 30.410156,49.589844 45.375175,64.554862 64.642873,75 80,75 v 5.103516 C 45.044902,79.827041 0,34.892228 0,0 Z M 80,80.130859 V 85 C 64.642873,85 45.375175,95.445134 30.410156,110.41016 15.445138,125.37517 5,144.64287 5,160 H 0 C 0,125.10777 45.044902,80.405894 80,80.130859 Z" />
      <path
         id="right-diamond-fill"
         fill="white"
         d="M 0,0 C 0,35 45,80 80,80 45,80 0,125 0,160 Z" />
    </svg>
  `
}
