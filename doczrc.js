/* eslint-disable  */
import { css } from 'docz-plugin-css';

export default {
  title: 'Vidulum Desktop Wallet Components',
  description: 'Vidulum Desktop Wallet Component Library',
  plugins: [css()],
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=PT+Sans:400,700',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700',
        },
      ],
    },
    body: {
      raw: '<div id="modal-root" />',
    },
  },
};
