import { css, keyframes } from "styled-components"

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
export const gradientBackground = css`
  background: ${({ theme }) => theme.gradients.main};
  background-size: 200% 200%;
  animation: ${gradient} 15s ease infinite;
`
