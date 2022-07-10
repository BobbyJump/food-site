import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    const modalTimerID = setTimeout(() => openModal('.modal', modalTimerID), 50000);

    // Tabs
    tabs();
    // Timer
    timer();
    // Modal
    modal('[data-modal]', '.modal', modalTimerID);
    // Menu cards
    cards();
    // Forms
    forms('form', modalTimerID);
    // Slider
    slider();
    // Calories calc
    calc();
});