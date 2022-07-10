function modal() {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');


    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    };

    const openModal = () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerID);
    };

    const modalTimerID = setTimeout(openModal, 50000);

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    const openModalByScroll = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            clearInterval(modalTimerID);
            window.removeEventListener('scroll', openModalByScroll);
        }
    };

    window.addEventListener('scroll', openModalByScroll);
}

module.exports = modal;