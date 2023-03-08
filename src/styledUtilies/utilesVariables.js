export const colors = {
    primary: (alpha)=> `rgba(16, 9, 37, ${alpha})`,
    secondary: (alpha) => `rgba(3, 250, 110, ${alpha})`
}
export const utilies = {
    centrar: `display: flex;
    justify-content: center;
    align-items: center;`,
    medidas: (width, height = width, unit = "px")=>{
        return `width: ${width+unit}; height: ${height+unit};`
    },
    top: "65px"
}
export const shadows = {
    txtWhite: `text-shadow: 1px 2px 1px white;`,
    txtBlack: `text-shadow: 1px 1px 1px black;`
}
export const mediaQueries = {
    extraLarge: `@media only screen and (min-width: 1201px)`,
    large: `@media only screen and (min-width: 993px)`,
    medium: `@media only screen and (min-width: 769px)`,
    small: `@media only screen and (min-width: 577px)`,
}