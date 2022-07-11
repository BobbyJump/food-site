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
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    // Timer
    timer('.timer', '2022-07-30');
    // Modal
    modal('[data-modal]', '.modal', modalTimerID);
    // Menu cards
    cards();
    // Forms
    forms('form', modalTimerID);
    // Slider
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        indicatorsCls: 'carousel-indicators',
        dotsCls: 'dot'
    });
    // Calories calc
    calc();
});