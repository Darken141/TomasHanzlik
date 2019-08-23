import { ProductionActionTypes } from './production.types';

//production Images
import backGroundImg from '../../images/pozadie_compress.jpg';
import hanzlik_sk from '../../images/hanzlik_compress.jpg';
import svadobna from '../../images/svadobna_compress.jpg';
import stuzkova from '../../images/stuzkova-v3-compress.jpg';
import visuals from '../../images/visuals_compress.png';

const INITIAL_STATE = {
    backgroundImg: backGroundImg,
    productions: [
        {
            id: 1,
            name: 'Hanzlik.sk',
            text: "Hlavná a zároveň všeobecne zameraná produkcia na tvorenie videoklipov, reklamných videi, aftermovie's a podobne zameraných videí.",
            img: hanzlik_sk,
            url: 'http://hanzlik.sk/',
            video: 'https://www.youtube.com/watch?v=l4qVw8OxjHc',
            hidden: false
        },
        {
            id: 2,
            name: 'Stužková produkcia',
            text: "Produkcia zameraná na tvorbu profesionálnych videí zo Stužkových slávností. Produkcia poskytuje rôzne balíčky pre študentov.",
            img: stuzkova,
            url: 'http://hanzlik.sk/',
            video: 'https://vimeo.com/306579567',
            hidden: false
        },
        {
            id: 3,
            name: 'Svadobná produkcia',
            text: "Produkcia zameraná na tvorbu profesionálnych svadobných videí. Produkcia disponuje rozsiahlym tímom kameramanov.",
            img: svadobna,
            url: 'http://svadobnaprodukcia.sk/',
            video: 'https://vimeo.com/307993308',
            hidden: false
        },
        {
            id: 4,
            name: 'Visuals for sale',
            text: "Produkcia zameraná na tvorbu a predaj vizuálov a 'one take' videoklipov.",
            img: visuals,
            url: 'https://www.instagram.com/visualsforsale/?fbclid=IwAR1EA4kAXCKIMJn5bSt72v7vwMDu0FjxFtQNi9XhHk1myfT_RWf6gIp3qv4',
            video: '',
            hidden: false
        }
    ]
}

const productionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ProductionActionTypes.SHOW_PRODUCTION_CONTAINER:
            return {
                ...state,
                productions: {
                    ...state.productions,
                    hidden: true
                }
            }

        default:
            return state
    }
}

export default productionReducer;