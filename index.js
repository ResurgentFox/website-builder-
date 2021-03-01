const model = [
    { type: 'title', value: 'Hello World from JS <3' },
    { type: 'text', value: 'some basic text' },
    {
        type: 'columns', value: [
            'first row',
            'second row',
            'third row',
        ],
    },
];

// Получаем доступ к блоку 
const $site = document.querySelector('#site') // элемент DOM 

model.forEach(block => {
    let html = ''
    if (block.type === 'title') {
        html = title(block);
    } else if (block.type === 'text') {
        html = text(block);
    } else if (block.type === 'columns') {
        html = columns(block);
    };

    // Метод, который позволяет вставлять в определённое место html 
    $site.insertAdjacentHTML('beforeend', html);
    },
);

// функция принимает в себя объект и возвращает готовый html 
function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `
};

function text(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `
};

function columns(block) {
    return `
    <div class="row">
        <div class="col-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, neque?
        </div>
        <div class="col-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, neque?
        </div>
        <div class="col-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, neque?
        </div>
    </div>
    `
};
