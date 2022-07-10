const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

const openModal = (modalSelector, modalTimerID) => {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if(modalTimerID){
        clearInterval(modalTimerID);
    }
};

function modal(triggerSelector, modalSelector, modalTimerID) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, modalTimerID));
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    const openModalByScroll = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerID);
            clearInterval(modalTimerID);
            window.removeEventListener('scroll', openModalByScroll);
        }
    };

    window.addEventListener('scroll', openModalByScroll);
}

export default modal;
export {closeModal, openModal};