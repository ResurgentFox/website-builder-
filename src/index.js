import { model } from './model';
import { templates} from './templates';
import './main.css';

// Получаем доступ к блоку 
const $site = document.querySelector('#site'); // элемент DOM 

model.forEach(block => {
    const toHTML = templates[block.type]
    if (toHTML) {
         // Метод, который позволяет вставлять в определённое место html 
        $site.insertAdjacentHTML('beforeend', toHTML(block));
        };
    });
