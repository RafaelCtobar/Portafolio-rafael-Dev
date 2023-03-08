const communStylesInBarIcon = `
    width: 28px;
    height: 4px;
    background-color: white;
    border-radius: 5px;
`

export const stylesIconBar = {
        styledBase: `
        transition: all 0.2s ease;
        ${communStylesInBarIcon}
        ::after, ::before{
         content: '';
         position: absolute;
         ${communStylesInBarIcon}
        }
        ::after{
             transform: translateY(10px);
             transition: all 0.7s ease;
         }
        ::before{
             transform: translateY(-10px);
             transition: all 0.7s ease;
         }
    `,
    stylesTransition: `
        background-color:transparent;
        &::after{
            transform: rotate(45deg) ;
        }
        &::before{
            transform: rotate(-45deg) ;
        }
    `
}