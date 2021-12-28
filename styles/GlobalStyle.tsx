import { createGlobalStyle } from "styled-components"

//variables
const ratioMargin = "0.125rem"
const ratioPadding = "0.125rem"
const ratioBorderRadius = "2px"
const ratioBorderRadiusPer = "25%"

const GlobalStyle = createGlobalStyle`
//margin
.m-1 {margin: calc(${ratioMargin} * 2 * 1)}
.m-2 {margin: calc(${ratioMargin} * 2 * 2)}
.m-3 {margin: calc(${ratioMargin} * 2 * 3)}
.m-4 {margin: calc(${ratioMargin} * 2 * 4)}
.m-5 {margin: calc(${ratioMargin} * 2 * 5)}
.m-6 {margin: calc(${ratioMargin} * 2 * 6)}

//marginTop
.mt-1 {margin-top: calc(${ratioMargin} * 2 * 1)}
.mt-2 {margin-top: calc(${ratioMargin} * 2 * 2)}
.mt-3 {margin-top: calc(${ratioMargin} * 2 * 3)}
.mt-4 {margin-top: calc(${ratioMargin} * 2 * 4)}
.mt-5 {margin-top: calc(${ratioMargin} * 2 * 5)}
.mt-6 {margin-top: calc(${ratioMargin} * 2 * 6)}
.-mt-1 {margin-top: calc(${ratioMargin} * 2 * -1)}
.-mt-2 {margin-top: calc(${ratioMargin} * 2 * -2)}
.-mt-3 {margin-top: calc(${ratioMargin} * 2 * -3)}
.-mt-4 {margin-top: calc(${ratioMargin} * 2 * -4)}
.-mt-5 {margin-top: calc(${ratioMargin} * 2 * -5)}
.-mt-6 {margin-top: calc(${ratioMargin} * 2 * -6)}

//marginLeft
.ml-1 {margin-left: calc(${ratioMargin} * 2 * 1)}
.ml-2 {margin-left: calc(${ratioMargin} * 2 * 2)}
.ml-3 {margin-left: calc(${ratioMargin} * 2 * 3)}
.ml-4 {margin-left: calc(${ratioMargin} * 2 * 4)}
.ml-5 {margin-left: calc(${ratioMargin} * 2 * 5)}
.ml-6 {margin-left: calc(${ratioMargin} * 2 * 6)}
.-ml-1 {margin-left: calc(${ratioMargin} * 2 * -1)}
.-ml-2 {margin-left: calc(${ratioMargin} * 2 * -2)}
.-ml-3 {margin-left: calc(${ratioMargin} * 2 * -3)}
.-ml-4 {margin-left: calc(${ratioMargin} * 2 * -4)}
.-ml-5 {margin-left: calc(${ratioMargin} * 2 * -5)}
.-ml-6 {margin-left: calc(${ratioMargin} * 2 * -6)}

//marginRight
.mr-1 {margin-right: calc(${ratioMargin} * 2 * 1)}
.mr-2 {margin-right: calc(${ratioMargin} * 2 * 2)}
.mr-3 {margin-right: calc(${ratioMargin} * 2 * 3)}
.mr-4 {margin-right: calc(${ratioMargin} * 2 * 4)}
.mr-5 {margin-right: calc(${ratioMargin} * 2 * 5)}
.mr-6 {margin-right: calc(${ratioMargin} * 2 * 6)}
.-mr-1 {margin-right: calc(${ratioMargin} * 2 * -1)}
.-mr-2 {margin-right: calc(${ratioMargin} * 2 * -2)}
.-mr-3 {margin-right: calc(${ratioMargin} * 2 * -3)}
.-mr-4 {margin-right: calc(${ratioMargin} * 2 * -4)}
.-mr-5 {margin-right: calc(${ratioMargin} * 2 * -5)}
.-mr-6 {margin-right: calc(${ratioMargin} * 2 * -6)}

//marginBottom
.mb-1 {margin-bottom: calc(${ratioMargin} * 2 * 1)}
.mb-2 {margin-bottom: calc(${ratioMargin} * 2 * 2)}
.mb-3 {margin-bottom: calc(${ratioMargin} * 2 * 3)}
.mb-4 {margin-bottom: calc(${ratioMargin} * 2 * 4)}
.mb-5 {margin-bottom: calc(${ratioMargin} * 2 * 5)}
.mb-6 {margin-bottom: calc(${ratioMargin} * 2 * 6)}
.mb-7 {margin-bottom: calc(${ratioMargin} * 2 * 7)}
.mb-8 {margin-bottom: calc(${ratioMargin} * 2 * 8)}

//padding
.p-1 {padding: calc(${ratioPadding} * 2)}
.p-2 {padding: calc(${ratioPadding} * 4)}
.p-3 {padding: calc(${ratioPadding} * 6)}
.p-4 {padding: calc(${ratioPadding} * 8)}
.p-5 {padding: calc(${ratioPadding} * 10)}
.p-6 {padding: calc(${ratioPadding} * 12)}

//paddingTop
.pt-1 {padding-top: calc(${ratioMargin} * 2)}
.pt-2 {padding-top: calc(${ratioMargin} * 4)}
.pt-3 {padding-top: calc(${ratioMargin} * 6)}
.pt-4 {padding-top: calc(${ratioMargin} * 8)}
.pt-5 {padding-top: calc(${ratioMargin} * 10)}
.pt-6 {padding-top: calc(${ratioMargin} * 12)}

//paddingBottom
.pb-1 {padding-bottom: calc(${ratioMargin} * 2)}
.pb-2 {padding-bottom: calc(${ratioMargin} * 4)}
.pb-3 {padding-bottom: calc(${ratioMargin} * 6)}
.pb-4 {padding-bottom: calc(${ratioMargin} * 8)}
.pb-5 {padding-bottom: calc(${ratioMargin} * 10)}
.pb-6 {padding-bottom: calc(${ratioMargin} * 12)}

//paddingLeft
.pl-1 {padding-left: calc(${ratioMargin} * 2)}
.pl-2 {padding-left: calc(${ratioMargin} * 4)}
.pl-3 {padding-left: calc(${ratioMargin} * 6)}
.pl-4 {padding-left: calc(${ratioMargin} * 8)}
.pl-5 {padding-left: calc(${ratioMargin} * 10)}
.pl-6 {padding-left: calc(${ratioMargin} * 12)}

//paddingRight
.pr-1 {padding-right: calc(${ratioMargin} * 2)}
.pr-2 {padding-right: calc(${ratioMargin} * 4)}
.pr-3 {padding-right: calc(${ratioMargin} * 6)}
.pr-4 {padding-right: calc(${ratioMargin} * 8)}
.pr-5 {padding-right: calc(${ratioMargin} * 10)}
.pr-6 {padding-right: calc(${ratioMargin} * 12)}

//border-radius px
.br-1 {border-radius: calc(${ratioBorderRadius}*1)}
.br-2 {border-radius: calc(${ratioBorderRadius}*2)}
.br-3 {border-radius: calc(${ratioBorderRadius}*3)}
.br-4 {border-radius: calc(${ratioBorderRadius}*4)}
.br-5 {border-radius: calc(${ratioBorderRadius}*5)}

//border-radius px
.br-per-1 {border-radius: calc(${ratioBorderRadiusPer}*1)}
.br-per-2 {border-radius: calc(${ratioBorderRadiusPer}*2)}
.br-per-3 {border-radius: calc(${ratioBorderRadiusPer}*3)}
.br-per-4 {border-radius: calc(${ratioBorderRadiusPer}*4)}

//background
.back {
  z-index: -100;
  position: absolute;
  top: 0;
}
.spacer {
  
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
.layer {
  background-image: url("/background/waves.svg");
}

//line
.line-shadow {
  box-shadow: inset 0px 0px 1px var(--text2);
}

//shadow
.box-shadow-1 {
  box-shadow: 0px 2px 7px -4px var(--surface3);
}
.box-shadow-2 {
  box-shadow: -1px 7px 15px 4px var(--text2);
}
.box-shadow-3 {
  box-shadow: -1px 7px 15px 6px var(--text2);
}
.box-shadow-4 {
  box-shadow: -1px 7px 15px 8px var(--text2);
}
.box-shadow-5 {
  box-shadow: -1px 7px 15px 10px var(--text2);
}



.button {
  outline: 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  border: solid 1px var(--surface4);
  background-color: transparent;
  display: flex;
  transition: background-color var(--speed) cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.navLink {
  background-color: transparent;
  transition: background-color var(--speed) cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  user-select: none;
}

.navLink:hover {
  background-color: var(--surface3);
}

.button:hover {
  background-color: var(--surface3);
}

//Container
.container {
  width: 100%;
  //min-height: 100vh;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: auto;
  margin-left: auto;
}

.containerPage {
  width: 100%;
  min-height: 80vh;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4rem;
}

.container-nav {
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  //font-weight: 500;
}

.container-navMob {
  width: 100%;
  height: 100%;
  display: flex;
}

.space-nav {
  margin-left: auto;
}

.btn-mob-nav {
  display: block;
  cursor: pointer;
}





.menu-desktop {
  display: none;
}

@media (min-width: 24rem) {
  .container, .containerPage,
  .container-nav, .container-navMob {
    max-width: 24em;
  }
  
}

.btn-search-nav {
  display: none;
}

@media (min-width: 36rem) {
  .container,.containerPage,
  .container-nav, .container-navMob {
    max-width: 36rem;
  }
  .btn-search-nav {
    display: flex;
    align-items: center;
  }
}

@media (min-width: 48rem) {
  .container,.containerPage,
  .container-nav, .container-navMob {
    max-width: 48rem;
  }
  .menu-desktop {
    display: block;
  }
}

@media (min-width: 70rem) {
  .container,.containerPage,
  .container-nav, .container-navMob {
    max-width: 70rem;
  }
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.border-gradient {
  border: 10px solid;
  border-image-slice: 1;
  border-width: 2px;
}
.border-gradient-purple {
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
}



`

export default GlobalStyle
