import "styled-components/native"

declare module "styled-components/native" {
    export interface DefaultTheme {
        colors: {
            background: string,
            grayDark: string,
            grayMedium: string,
            white: string,
            error: string,
            success: string,
            neutral: string,
            grayLight: string,
            graySoft: string,
            cyanBlue: string,
            blueDark: string,
            blueMedium: String,
            darkCyanBlue: String
        },

        fonts: {
            regular: string,
            semiBold: string,
            medium: string
        }
    }
}