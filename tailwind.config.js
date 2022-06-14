/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'green': '#11B980',
                'blue': '#549DF2',
                'blue1': '#318FE7',
                'grey': '#e2e2e2',
                'grey1': '#cfcfcf',
                'grey2': '#F1F1F1',
                'grey3': '#6A6A6A',
                'grey4': '#989898',
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
                '90': '90px',
            },
            margin: {
                '3': '3px',
                '7': '7px',
                '14': '14px',
                '15': '15px',
                '29': '29px',
                '30': '30px',
                '38': '38px',
                '42': '42px',
                '64': '64px',
                '119': '119px'
            },
            height: {
                '33': '33px',
                '40': '40px',
                '44': '44px',
                '195': '195px'
            },
            width: {
                '1': '1px',
                '74': '74px',
                '92': '92px',
                '128': '128px',
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
