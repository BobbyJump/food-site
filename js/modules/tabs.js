function tabs(tabsSlctr, tabsContentSlctr, tabsParentSlctr, activeClass) {
    const tabs = document.querySelectorAll(tabsSlctr),
        tabsContent = document.querySelectorAll(tabsContentSlctr),
        tabsParent = document.querySelector(tabsParentSlctr);

    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    };

    const showTabContent = (i = 0) => {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsSlctr.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;