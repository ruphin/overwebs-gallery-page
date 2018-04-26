import { GluonElement, html } from '../gluonjs/gluon.js';
import { repeat } from '../lit-html/lib/repeat.js';
import '../overwebs-player-data/overwebs-player-data.js';
import { heroData } from '../overwebs-hero-data/overwebs-hero-data.js';
import '../overwebs-player-widget/overwebs-player-widget.js';
import '../overwebs-fonts/overwebs-fonts.js';

const heroes = Object.values(heroData);

class OverwebsGalleryPage extends GluonElement {
  get template() {
    return html`
    <style>

      overwebs-gallery-hero {
        display: inline-block;
        height: 200px;
        width: 200px;
        background: red;
      }

      :host {
        display: block;
        position: relative;
        overflow: hidden;
        min-height: 100%;
        background: rgba(0, 0, 0, 0.25);
      }

      overwebs-player-widget {
        position: absolute;
        top: calc(40 / 2560 * var(--overwebs-window-size, 1920px));
        right: calc(68 / 2560 * var(--overwebs-window-size, 1920px));
      }

      .header {
        position: absolute;
        top: calc(154 / 2560 * var(--overwebs-window-size, 1920px));
        left: calc(120 / 2560 * var(--overwebs-window-size, 1920px));
        height: calc(230 / 2560 * var(--overwebs-window-size, 1920px));
        overflow: visible;
        animation-duration: 0.6s;
        animation-name: headermove;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
        animation-direction: normal;
      }

      .header #text {
      font-family: overwebs-big-noodle;
      font-size: calc(266 / 2560 * var(--overwebs-window-size, 1920px));
      }

      a.hero {
        z-index: 1;
        text-decoration: none;
        margin-left: calc(5/25.6*1vw);
        margin-right: calc(5/25.6*1vw);
        margin-bottom: calc(10/25.6*1vw);

        animation-duration: 0.2s;
        animation-name: fadein;
        animation-iteration-count: 1;
        animation-timing-function: linear;
        animation-direction: normal;
        animation-fill-mode: both;
        transition: z-index 0.05s step-end;
      }
      a.hero:hover {
        transition: none;
        z-index: 2;
      }

      a.hero:nth-of-type(2) {
        animation-delay: 0.02s;
      }
      a.hero:nth-of-type(3) {
        animation-delay: 0.04s;
      }
      a.hero:nth-of-type(4) {
        animation-delay: 0.06s;
      }
      a.hero:nth-of-type(5) {
        animation-delay: 0.08s;
      }
      a.hero:nth-of-type(6) {
        animation-delay: 0.1s;
      }
      a.hero:nth-of-type(7) {
        animation-delay: 0.12s;
      }
      a.hero:nth-of-type(8) {
        animation-delay: 0.14s;
      }
      a.hero:nth-of-type(9) {
        animation-delay: 0.16s;
      }
      a.hero:nth-of-type(10) {
        animation-delay: 0.18s;
      }
      a.hero:nth-of-type(11) {
        animation-delay: 0.2s;
      }
      a.hero:nth-of-type(12) {
        animation-delay: 0.22s;
      }
      a.hero:nth-of-type(13) {
        animation-delay: 0.24s;
      }
      a.hero:nth-of-type(14) {
        animation-delay: 0.26s;
      }
      a.hero:nth-of-type(15) {
        animation-delay: 0.28s;
      }
      a.hero:nth-of-type(16) {
        animation-delay: 0.3s;
      }
      a.hero:nth-of-type(17) {
        animation-delay: 0.32s;
      }
      a.hero:nth-of-type(18) {
        animation-delay: 0.34s;
      }
      a.hero:nth-of-type(19) {
        animation-delay: 0.36s;
      }
      a.hero:nth-of-type(20) {
        animation-delay: 0.38s;
      }
      a.hero:nth-of-type(21) {
        animation-delay: 0.4s;
      }
      a.hero:nth-of-type(22) {
        animation-delay: 0.42s;
      }
      a.hero:nth-of-type(23) {
        animation-delay: 0.44s;
      }
      a.hero:nth-of-type(24) {
        animation-delay: 0.46s;
      }
      a.hero:nth-of-type(25) {
        animation-delay: 0.48s;
      }
      a.hero:nth-of-type(26) {
        animation-delay: 0.5s;
      }

      .hero-gallery {
        display: inline-flex;
        flex-wrap: wrap;
        width: 92%;
        justify-content: center;
        align-items: center;
        margin-left: 4%;
        margin-right: -4%;
      }

      @keyframes fadein {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
      @keyframes headermove {
        from {
          opacity: 0;
          transform: translateY(calc(30 / 2560 * var(--overwebs-window-size, 1920px)));
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
    
    <svg class="header" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fillgradient" x1="0" x2="0" y1="0" y2="1">
          <stop stop-color="#ffffff" offset="0" stop-opacity=".9"/>
          <stop stop-color="#ffffff" offset="1" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="outlinegradient" x1="0" x2="0" y1="0" y2="1">
          <stop stop-color="#4C5C76" offset="0" stop-opacity="0.6"/>
          <stop stop-color="#4C5C76" offset="1" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
      <g>
        <text id="text" x="4.225vw" y="12.25vw" stroke-width="0.12625vw" stroke-linejoin="round" stroke-alignment="outside" stroke="url(#outlinegradient)" fill="url(#fillgradient)">Hero Gallery</text>
      </g>
    </svg>

    <overwebs-hero-data id="heroData"></overwebs-hero-data>
    <overwebs-player-data id="playerData"></overwebs-player-data>
    <overwebs-player-widget id="playerWidget"></overwebs-player-widget>


    <div class="hero-gallery">
      ${repeat(
        heroes,
        hero => hero.name,
        hero => html`
          <a class="hero" href="${_backgroundRef(hero)}">
            <overwebs-gallery-hero hero="${hero}" unlocks="${_unlocks(hero, this.playerData)}"></overwebs-gallery-hero>
          </a>
        `
      )}
    </div>

    <overwebs-global-button id="backButton" action="back"></overwebs-global-button>`;
  }
  connectedCallback() {
    super.connectedCallback();
    console.log(this.$);
    this.$.backButton.onclick = event => {
      event.stopPropagation();
      history.back();
    };

    this.$.playerData.addEventListener('player-changed', () => {
      this.playerData = this.$.playerData.player;
      this.$.playerWidget.player = this.$.playerData.player;
      this.render();
    });
  }
  render(args) {
    super.render(args);
    console.log('rendering!');
  }
}

const _backgroundRef = hero => {
  if (!hero.background) {
    return 'javascript:;';
  } else {
    return `/main?background=./${hero.id}`;
  }
};

const _unlocks = (hero, playerData) => (playerData && playerData.unlocks && playerData.unlocks[hero.id]) || 0;

customElements.define(OverwebsGalleryPage.is, OverwebsGalleryPage);
