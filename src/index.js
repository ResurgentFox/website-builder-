import { model } from './model';
import './main.css';

// Получаем доступ к блоку 
const $site = document.querySelector('#site'); // элемент DOM 

model.forEach(block => {
    $site.insertAdjacentHTML('beforeend', block.toHTML());
});
