import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root{


--font-primary :'K2D',sans-serif;

//black
--color-black: #252726;
--color-black--1: #1e1f1e;
--color-black--2: #161717;
--color-black--3: #0f100f;
--color-black--darkest : #0b0c0b;
--shadow: rgba(11, 12, 11, 0.3);
--shadow-light:rgba(11, 12, 11, 0.25);
--shadow-lighter:rgba(11, 12, 11, 0.2);
--shadow-lightest:rgba(11, 12, 11, 0.15);
--shadow-darker:rgba(11, 12, 11, 0.35);
--shadow-darkest:rgba(11, 12, 11, 0.45);



//primary
--color-primary:#190482;
--color-primary-dark:#05011a;
--color-primary-dark--1: #140368;
--color-primary-dark--2:#0f024e;
--color-primary-light:  #e8e6f3;
--color-primary-light--1:#d1cde6;
--color-primary-light--2:#a39bcd;
--color-primary-light--3:#7568b4;

//secondary
--color-secondary--1:#7752FE;
--color-secondary--2:#8E8FFA;
--color-secondary--3:#C2D9FF;


//accent
--color-accent1:#F75A47;
--color-accent1-dark:#7c2d24;
--color-accent1-dark--1:#c64839;
--color-accent1-light:#fddeda;
--color-accent1-light--1:#fbada3;


--color-accent2:#FF9E11;
--color-accent2-dark:#804f09;
--color-accent2-dark--1:#b36f0c;
--color-accent2-light:#ffeccf;
--color-accent2-light--1:#ffcf88;



//linear-gradients
--color-primary-mixed:#46437C;
--color-primary-mixed--1:#5D6279;
--color-primary-mixed--2:#748276;
--color-primary-mixed--3:#8AA172;


--color-secondary-mixed: #bbb7e8;
--color-secondary-mixed--1:#BFC6CF;
--color-secondary-mixed--2: #C4DBA9;
--color-secondary-mixed--3: #C8E98F;




//greys
--color-white:#f6f6f6;
--color-grey-light:#ddd;
--color-grey-light--1:#c5c5c5;
--color-grey-light--2:#acacac;
--color-grey-dark:#626262;
--color-grey-dark--1:#4a4a4a;
--color-grey-dark--2:#313131;
--color-grey-dark--3:#191919;

--phone: 37.5em;
--tab-port:56.25em;
--tab-land: 75em;
--particular-small-laptop: 98.5em;
--laptop: 112.5em;
--big-desktop:120em;

}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  @media (min-width:120em) {
    font-size: 68.75%;
  }
  @media (max-width:75em) {
    font-size: 56.25%; //9px;
  }
  @media (max-width:56.25em) {
    font-size: 50%;
  }
}

body {
  box-sizing: border-box;
  font-size:1.6rem;
  font-family: var(--font-primary);
  color: var(--color-grey-dark--3);
  font-weight: 400;
  line-height: 1.6;
}
.section--hidden{
  opacity:0;
  transform:translateY(10rem);
}

`

export default GlobalStyles
