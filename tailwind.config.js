const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xs: ".75rem",
                sm: ".875rem",
                tiny: ".875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "4rem",
                "7xl": "5rem",
                "8xl": "6rem",
                "9xl": "7rem",
                "10xl": "8rem",
                "11xl": "9rem",
                "12xl": "10rem",
                "13xl": "11rem",
                "14xl": "12rem",
                "15xl": "13rem",
                "16xl": "14rem",
                "17xl": "15rem",
                "18xl": "16rem",
                "19xl": "17rem",
                "20xl": "18rem",
                "21xl": "19rem",
                "22xl": "20rem",
            },
            letterSpacing: {
                widest: ".3rem",
            },
            textColor: (theme) => theme("colors"),
            textColor: {
                white: "#ffffff",
                primary: "#92B448",
                secondary: "#10834E",
            },
            backgroundColor: (theme) => ({
                ...theme("colors"),
                green: "#0A7E49",
                red: "#F14C4A",
            }),
        },
    },

    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
