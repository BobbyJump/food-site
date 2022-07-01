document.addEventListener('DOMContentLoaded', () => {

    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'), 
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    };

    const showTabContent = (i = 0) => {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const futureDate = `2022-07-06`;
    
    const getRemainingTime = endDate => {
        let days, hours, minutes, seconds;
        const time = Date.parse(endDate) - Date.parse(new Date());
        if (time <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(time / (1000 * 60 * 60 * 24));
            hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((time / 1000 / 60) % 60);
            seconds = Math.floor((time / 1000) % 60);
        }

        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const getZero = (num) => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    };

    const setTimer = (selector, endTime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer() {
            const time = getRemainingTime(endTime);

            days.innerHTML = getZero(time.days);
            hours.innerHTML = getZero(time.hours);
            minutes.innerHTML = getZero(time.minutes);
            seconds.innerHTML = getZero(time.seconds);

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    };
    
    setTimer('.timer', futureDate);
});