import {Abril_Fatface, Cinzel, Jost, Patua_One, Rowdies, Yellowtail} from 'next/font/google';

const JostFont=Patua_One({
    subsets:['latin'],
    weight:'400'
})
const YellowtailFont=Yellowtail({
    subsets:['latin'],
    weight:'400'
})


const TextFonts={JostFont,YellowtailFont}
export default TextFonts