import image from './assets/mountain2.jpg';

export const model = [
    {
        type: 'title', value: 'Website builder with native JavaScript', options: {
            tag: 'h2', 
            styles: {
                margin: '1rem', 
                background: 'linear-gradient( to right, #D8BFD8, #B0C4DE)',
                'border-radius': '5px; box-shadow:2px 2px 3px 2px #E6E6FA',
                'box-shadow': '2px 2px 3px 2px #E6E6FA',
                color: '#000',
                padding: '1.5rem',
                'text-align': 'center',
            },
    }},
    { type: 'text', value: 'some basic text' },
    {
        type: 'columns', value: [
            'first row',
            'second row',
            'third row',
            'fourth row',
        ]},
    { type: 'image', value: image},
];
