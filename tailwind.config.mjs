import typographyPlugin from "@tailwindcss/typography";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.astro", "./pages/**/*.astro"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...fontFamily.sans],
            },
            fontSize: {
                title: [
                    "clamp(32px, 10vw, 68px)",
                    {
                        fontWeight: "700",
                        letterSpacing: "-0.025em",
                        lineHeight: "1.2",
                    },
                ],
                subtitle: [
                    "clamp(22px, 8vw, 48px)",
                    {
                        fontWeight: "700",
                        letterSpacing: "-0.05em",
                        lineHeight: "1",
                    },
                ],
                xxs: [
                    "0.6875rem",
                    {
                        lineHeight: "0.8125rem",
                    },
                ],
            },
            colors: {
                primary: "rgb(var(--primary))",
                background: "rgb(var(--background))",
                foreground: {
                    DEFAULT: "rgb(var(--foreground))",
                    muted: "rgb(var(--foreground-muted))",
                },
                border: {
                    DEFAULT: "rgba(var(--border))",
                    shadow: "rgba(var(--border-shadow))",
                },
            },
            boxShadow: {
                "border-top": "inset 0 1px 1px 0",
            },
            dropShadow: {
                heading: "0 0 25px var(--tw-shadow-color)",
                icon: "0px 0px 7px var(--tw-shadow-color)",
            },
            animation: {
                "background-shine": "background-shine 2s linear infinite",
                "fade-in": "fade-in 2s both",
            },
            keyframes: {
                "background-shine": {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
                "fade-in": {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
            },
            typography: () => ({
                foreground: {
                    css: {
                        "--tw-prose-body": "rgb(var(--foreground-muted))",
                        "--tw-prose-headings": "rgb(var(--foreground))",
                        "--tw-prose-lead": "rgb(var(--foreground))",
                        "--tw-prose-links": "rgb(var(--foreground))",
                        "--tw-prose-bold": "rgb(var(--foreground))",
                        "--tw-prose-counters": "rgb(var(--foreground))",
                        "--tw-prose-bullets": "rgb(var(--foreground-muted))",
                        "--tw-prose-hr": "rgba(var(--border))",
                        "--tw-prose-quotes": "rgb(var(--foreground-muted))",
                        "--tw-prose-quote-borders": "rgba(var(--border))",
                        "--tw-prose-captions": "rgb(var(--foreground))",
                        "--tw-prose-kbd": "rgb(var(--foreground))",
                        "--tw-prose-kbd-shadows": "255 255 255",
                        "--tw-prose-code": "rgb(var(--foreground))",
                        "--tw-prose-pre-code": "rgb(var(--foreground))",
                        "--tw-prose-pre-bg": "rgb(var(--foreground))",
                        "--tw-prose-th-borders": "rgba(var(--border))",
                        "--tw-prose-td-borders": "rgba(var(--border))",
                    },
                },
            }),
        },
    },
    plugins: [typographyPlugin],
};
