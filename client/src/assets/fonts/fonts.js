import { createGlobalStyle } from 'styled-components';

import RobotoMedium from './RobotoMedium.ttf';
import RobotoThin from './RobotoThin.ttf';

export const GlobalFonts =  createGlobalStyle`
    @font-face {
        font-family: 'Roboto;
        src: local('Roboto'), local('Roboto'),
        url(${RobotoMedium}) format('ttf'),
         url(${RobotoThin}) format('ttf'),
        font-weight: 300;
        font-style: normal;
    }
  `;
