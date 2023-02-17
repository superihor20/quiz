import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

import { animationGradient } from '../../../utils/constans/colors';

const gradientAnimation = keyframes`
	0% {
		background-position: 0% 0%;
	}

  25% {
    background-position: 150% 150%;
  }

	50% {
		background-position: 300% 300%;
	}

  75% {
		background-position: 150% 150%;
	}

	100% {
		background-position: 0% 0%;
	}
`;

export const LinkStyled = styled(Link)`
  background: ${animationGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;
