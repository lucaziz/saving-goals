import { keyframes } from 'styled-components';

export const animaDash = keyframes`
  to {
      stroke-dashoffset: 0;
    }
`;

export const animaFadeIn = keyframes`
  from { opacity: 0;}
  to { opacity: 1;}
`;

export const animaInToLeft = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1;  transform: translateX(0px);}
`;

export const animaFadeScaleIn = keyframes`
  from { opacity: 0; transform: scale(0.7);}
  to { opacity: 1; transform: scale(1);}
`;

export const animaExpandVertical = keyframes`
  from { transform: scaleY(0);}
  to { transform: scaleY(1);}
`;

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
