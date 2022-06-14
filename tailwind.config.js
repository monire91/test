/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'green': '#11B980',
                'blue': '#549DF2',
                'grey': '#e2e2e2',
                'grey1': '#cfcfcf',
                'grey2': '#F1F1F1',
                'black': '#4E4E4E'
            },
            borderWidth: {
                '1': '1px'
            },
            padding: {
                '11': '11px',
                '13': '13px',
                '31': '31px',
                '25': '25px',
                '27': '27px',
                '62': '62px',
                '81': '81px',
            },
            margin: {
                '3': '3px',
                '7': '7px',
                '15': '15px',
                '29': '29px',
                '64': '64px',
                '119': '119px'
            },
            height: {
                '33': '33px',
                '44': '44px',
                '195': '195px'
            },
            width: {
                '74': '74px',
                '221': '221px',
                '295': '295px',
            },
            borderRadius: {
                '100': '100px'
            },
            lineHeight: {
                '19': '19px'
            },
            fontSize: {
                '16': ['16px']
            }
        },
    },
    plugins: [
        function ({addComponents}) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen lg': {
                        maxWidth: '1024px',
                    },
                }
            })
        }
    ],
}
