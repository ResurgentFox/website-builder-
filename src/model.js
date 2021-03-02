import image from './assets/image2.png';
import {Block} from './classes/blocks';

export const model = [
    new Block('title', 'Website builder with native JavaScript', {
        tag: 'h2',
        styles: {
            margin: '1rem',
            background: 'linear-gradient( to right, #D8BFD8, #B0C4DE)',
            'border-radius': '5px; box-shadow:2px 2px 3px 2px #E6E6FA',
            'box-shadow': '2px 2px 3px 2px #E6E6FA',
            color: '#000',
            padding: '1.5rem',
            'text-align': 'center',
            'font-family': 'var(--bs-font-sans-serif)',
        }
    }),

    new Block('image', image, {
        styles: {
            margin: '4rem 10rem',
            display: 'flex', 
            'justify-content': 'center',
        }, imageStyles: {
            width: '600px',
            height: 'auto',
        }, alt: 'This is image' }),

    new Block('text', 'What do we get?', {
        styles: {
        padding: '1.5rem 0',
        'text-align': 'center',
        'font-size': '2rem',
        'font-weight': '500',
        'font-family': 'var(--bs-font-sans-serif)',
        },
    }),
    
    new Block('columns', [
        'Learning a new stuff',
        'Application with native JavaScript',
        'Without frameworks and libraries',
    ], {
        styles: {
            margin: '2rem 4rem',
            padding: '0 5rem',
            display: 'flex', 
            'justify-content': 'space-between',
            'font-size': '24px',
            'font-weight': '300',
            'font-family': 'var(--bs-font-sans-serif)',
        },
    }),
];
