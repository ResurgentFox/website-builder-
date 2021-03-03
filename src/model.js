import image from './assets/image2.png';
import {TitleBlock, ImageBlock, TextBlock, ColumnsBlock} from './components/blocks';

export const model = [
    new TitleBlock('Website builder with native JavaScript', {
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
        },
    }),

    new ImageBlock(image, {
        styles: {
            margin: '4rem 10rem',
            display: 'flex', 
            'justify-content': 'center',
        }, imageStyles: {
            width: '600px',
            height: 'auto',
        }, alt: 'This is image' }),

    new ColumnsBlock(
        [
        'Learning a new stuff',
        'Application with native JavaScript',
        'Without frameworks and libraries',
    ], {
        styles: {
            margin: '2rem 4rem',
            padding: '0 5rem',
            display: 'flex', 
            'justify-content': 'space-between',
            'font-size': '30px',
            'font-weight': '400',
            'font-family': 'var(--bs-font-sans-serif)',
        },
    }),

    new TextBlock('JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. More info: https://developer.mozilla.org and https://learn.javascript.ru', {
        styles: {
        padding: '3rem 0',
        'text-align': 'center',
        'font-size': '24px',
        'font-weight': '300',
        'font-family': 'var(--bs-font-sans-serif)',
        background: 'linear-gradient( to right top, #B0C4DE, #D8BFD8)',
        },
    }),

];
