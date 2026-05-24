export const selectors = {
    body: document.querySelector('body'),
    main: document.querySelector('.main'),
    loading: document.querySelector('.loading'),

        
    player: document.querySelector('.about__player-img'),
    modalPlayer: document.querySelector('.modal'),
    modalBack: document.querySelector('.modal__back'),

    burger: document.querySelector('.burger'),
    burgerContent: document.querySelector('.burger__content'),
    burgerNav: document.querySelector('.burger__nav'),

    options: document.querySelectorAll('.header__form-select-item'),
    optionsLocate: document.getElementById('form-locate'),
    optionsTime: document.getElementById('form-date'),
    optionsCount: document.getElementById('form-members'),
    optionsBtn: document.querySelector('.header__form-button'),

    // dataKey:
    dataKey: document.querySelectorAll('[data-key]')
}