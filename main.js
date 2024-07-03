'use strict';
{
  //月 javascriptで作成とGoの勉強

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const myskill = document.getElementById('myskill');
  const myintroduce = document.getElementById('myintroduce');
  const inquiry = document.getElementById('inquiry');
  const product = document.getElementById('product');

  myskill.addEventListener('click', () => {
     overlay.classList.remove('show');
     open.classList.remove('hide');
  });

  myintroduce.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
 });

 inquiry.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

 product.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});


  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

 //自己紹介

  const introduceItems = document.querySelectorAll('.introduce li a');
  const contents = document.querySelectorAll('.content');


  introduceItems.forEach(item => {
     item.addEventListener('click', e => {
        e.preventDefault();

        introduceItems.forEach(item => {
          item.classList.remove('active');
        })
        item.classList.add('active');

        contents.forEach(content => {
           content.classList.remove('active');
        });
        document.getElementById(item.dataset.id).classList.add('active');
     });
  });
 
}