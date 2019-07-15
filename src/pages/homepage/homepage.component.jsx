import React from 'react';

import ProductionList from '../../components/production-list/production-list.component';

//background image
import backGroundImg from '../../images/pozadie_compress.jpg';

//production Images
import hanzlik_sk from '../../images/hanzlik_compress.jpg';
import svadobna from '../../images/svadobna_compress.jpg';
import stuzkova from '../../images/stuzkova-v3-compress.jpg';
import visuals from '../../images/visuals_compress.png';

import './homepage.styles.scss'

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            backgroundImg: backGroundImg,
            productions: [
                {
                    id: 1,
                    name: 'Hanzlik.sk',
                    text: "Hlavná a zároveň všeobecne zameraná produkcia na tvorenie videoklipov, reklamných videi, aftermovie's a podobne zameraných videí.",
                    img: hanzlik_sk,
                    url: 'http://hanzlik.sk/'
                },
                {
                    id: 2,
                    name: 'Stužková produkcia',
                    text: "Produkcia zameraná na tvorbu profesionálnych videí zo Stužkových slávností. Produkcia poskytuje rôzne balíčky pre študentov.",
                    img: stuzkova,
                    url: 'http://hanzlik.sk/'
                },
                {
                    id: 3,
                    name: 'Svadobná produkcia',
                    text: "Produkcia zameraná na tvorbu profesionálnych svadobných videí. Produkcia disponuje rozsiahlym tímom kameramanov.",
                    img: svadobna,
                    url: 'http://svadobnaprodukcia.sk/'
                },
                {
                    id: 4,
                    name: 'Visuals for sale',
                    text: "Produkcia zameraná na tvorbu a predaj vizuálov a 'one take' videoklipov.",
                    img: visuals,
                    url: 'https://www.instagram.com/visualsforsale/?fbclid=IwAR1EA4kAXCKIMJn5bSt72v7vwMDu0FjxFtQNi9XhHk1myfT_RWf6gIp3qv4'
                }
            ]
        }
    }

    render() {
        return (
            <div className='homepage' style={{
                backgroundImage: `url(${backGroundImg})`
            }}>
                <ProductionList productions={this.state.productions} />
            </div>
        )
    }
}

export default HomePage;