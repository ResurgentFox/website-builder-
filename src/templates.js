import {row, col, css} from  './utils'

// функция принимает в себя объект и возвращает готовый html
function title(block) {
    const { tag = 'h1', styles } = block.options;
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
};

function text(block) {
    return row(col(`<p>${block.value}</p>`));
};

function columns(block) {
    const html = block.value.map(col).join(''); //сокращение от block.value.map(item => col(item)) 
    return row(html);
};

function image(block) {
    return row(col(`<img src="${block.value}"/>`));
};

export const templates = {
    title,
    text,
    columns,
    image,
}; 