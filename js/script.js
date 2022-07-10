document.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        modal = require('./modules/modal'),
        cards = require('./modules/cards'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc');
    
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