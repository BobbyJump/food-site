import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';

document.addEventListener('DOMContentLoaded', () => {
    // Tabs
    tabs();
    // Timer
    timer();
    // Modal
    modal();
    // Menu cards
    cards();
    // Forms
    forms();
    // Slider
    slider();
    // Calories calc
    calc();
});