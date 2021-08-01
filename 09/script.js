"use strict";

const widthArray = [
  'border-top-width',
  'border-left-width',
  'border-bottom-width',
  'border-right-width'
];

for (let i = 0; i < 4; i += 1) {
  p.style[widthArray[i]] = i * 2 + 'px';
}