import { btn, start, end } from './mod2.js';

btn.addEventListener("touchstart", start, { once: true });

btn.addEventListener("touchend", end, { once: true });