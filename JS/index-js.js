

document.addEventListener('DOMContentLoaded', (e) => {
    /*Форма поиска*/
    document.getElementById('open-search-form').addEventListener('click', (e) => {
        document.getElementById('search-form').classList.add('search-form_show')
    })

    document.getElementById('close-search-form').addEventListener('click', (e) => {
        document.getElementById('search-form').classList.remove('search-form_show')
    })
    /*Бургер*/
    document.getElementById('header-open').addEventListener('click', (e) => {
        document.getElementById('header').classList.toggle('open')
        document.body.classList.toggle('stop-skroll')

    })
       
    document.querySelectorAll('.nav__link').forEach((el) => {
        el.addEventListener('click', (e) => {
            document.getElementById('header').classList.remove('open')
            document.body.classList.remove('stop-skroll')
        })
    })

})

/*tabs*/

let tabsBtn = document.querySelectorAll('.how__btn');
let tabsItem = document.querySelectorAll('.specification__tabs');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs__btn--active')});
    e.currentTarget.classList.add('tabs__btn--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

/*accordion*/

new Accordion('.accordion');
