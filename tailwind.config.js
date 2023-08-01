/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#0666A8',
                'primary-light': '#97BED9',
                'warning': '#FFBE55',
                'success': '#45B787',
                'danger': '#F44336',
                'info': '#2196F3',
                'dark': '#212121',
                'light': '#F5F5F5'
            },
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'serif': ['Merriweather', 'serif'],
            }
        },
    },
    plugins: [],
}