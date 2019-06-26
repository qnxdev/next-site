import NProgress from 'nprogress';

import RouterEvents from '../lib/router-events';

let timeout;

const start = () => {
  timeout = setTimeout(NProgress.start, 100);
};

const done = () => {
  clearTimeout(timeout);
  NProgress.done();
};

RouterEvents.on('routeChangeStart', start);
RouterEvents.on('routeChangeComplete', done);
RouterEvents.on('routeChangeError', done);

export default () => (
  <style jsx global>
    {`
      /* Make clicks pass-through */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: rgb(var(--accent-color));
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      /* Fancy blur effect */
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px rgb(var(--accent-color)), 0 0 5px rgb(var(--accent-color));
        opacity: 1;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}
  </style>
);
