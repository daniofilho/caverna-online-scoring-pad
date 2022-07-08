import { createGlobalStyle } from "styled-components";

import reset from "./common/reset";

export default createGlobalStyle`
  ${reset}

	html {
    //scroll-behavior: smooth;
		font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  #__next,
  html,
  body {
    display: flex;
    flex-flow: column;

    margin: 0;
    padding: 0;
    border: 0;

		min-height: 100vh;

    background-color: ${({ theme }) => theme.background.color};
    color: ${({ theme }) => theme.background.contrast};
  }

  body {
    transition: opacity 0.3s;
  }
 

  #__next  {
    height: 100%;
    flex: 1;
  }
	
	picture {
		display: block;
	}
  img {
    max-width: 100%;
		display: block;
  }

  h1 {
    font-size: 2em; 
    @media (max-width: 991px) {
      font-size: 1.5em;
    }
  }
  h2 {
    font-size: 1.5em; 
    @media (max-width: 991px) {
      font-size: 1.17em;
    }
  }
  h3 {
    font-size: 1.17em; 
    @media (max-width: 991px) {
      font-size: 1em;
    }
  }
  h4 {
    font-size: 1em; 
    @media (max-width: 991px) {
      font-size: 0.83em;
    }
  }
  h5 {
    font-size: 0.83em; 
    @media (max-width: 991px) {
      font-size: 0.67em;
    }
  }
  h6 {
    font-size: 0.67em; 
    @media (max-width: 991px) {
      font-size: 0.5em;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1.2rem; 
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    line-height: 1.2rem; 

    &:last-of-type {
      margin-bottom: 0;
    }

		small {
			font-size: 90%;
			line-height: 0.9rem;
			display: inline-block;
		}

    span {
      font-size: inherit;
    }
 
  }

  span  {
    font-size: 0.8rem;
  }

 

  input {
    @media (max-width: 991px) {
      font-size: 1rem !important;
    }
  }

  button {
    cursor: pointer;
  }

  hr {
    opacity: 0.3;
    margin: 1rem 0; 
  }

  /* - - - - - - - -  Utils - - - - - - - - */

  .loading-page {
    opacity: 0.2; 
  }

  /* Vendor Fix */
  .customSelect__menu {
    z-index: 100 !important;
  }

  
 
`;
