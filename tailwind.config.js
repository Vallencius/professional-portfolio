const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'blue': {
                    '50': '#edffff',
                    '100': '#c0faff',
                    '200': '#82f4ff',
                    '300': '#3cedff',
                    '400': '#04edfd',
                    '500': '#00d1e0',
                    '600': '#00a5b5',
                    '700': '#00808f',
                    '800': '#006471',
                    '900': '#03363d',
                },
                'gray': {
                    '50': '#f7f7f7',
                    '100': '#e3e3e3',
                    '200': '#c8c8c8',
                    '300': '#a4a4a4',
                    '400': '#818181',
                    '500': '#666666',
                    '600': '#515151',
                    '700': '#434343',
                    '800': '#383838',
                    '900': '#131313',
                },
                'purple': {
                    '50': '#faf5ff',
                    '100': '#f3e9fe',
                    '200': '#e8d6fe',
                    '300': '#d7b6fc',
                    '400': '#be87f9',
                    '500': '#a659f3',
                    '600': '#9137e6',
                    '700': '#7c26ca',
                    '800': '#6924a5',
                    '900': '#571e85',
                },
                'coffee': {
                    '50': '#f9f8f7',
                    '100': '#f2f0ee',
                    '200': '#e7e3e1',
                    '300': '#ded9d6',
                    '400': '#bcb3ad',
                    '500': '#a39790',
                    '600': '#8c7e76',
                    '700': '#746861',
                    '800': '#615853',
                    '900': '#544d48',
                },
                'yellow': {
                    '50': '#fbf8eb',
                    '100': '#f5f0cc',
                    '200': '#eddf9b',
                    '300': '#e3c761',
                    '400': '#d9af36',
                    '500': '#cf9e2a',
                    '600': '#ad7821',
                    '700': '#8b581d',
                    '800': '#74471f',
                    '900': '#633c20',
                },                
            }
        },
    },

    plugins: [
        require('@tailwindcss/forms')
    ],
};
