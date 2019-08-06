import React from 'react';

import DashSettingsList from '../dashboard-settings-list/dashboard-settings-list.component';

import './dashboard-settings.styles.scss';

class DashSettings extends React.Component {
    constructor(){
        super();
        this.state = {
            backgroundImg: '',
            productions: [
                {
                    id: 1,
                    name: 'Hanzlik.sk',
                    text: "Hlavná a zároveň všeobecne zameraná produkcia na tvorenie videoklipov, reklamných videi, aftermovie's a podobne zameraných videí.",
                    img: '',
                    url: 'http://hanzlik.sk/'
                },
                {
                    id: 2,
                    name: 'Stužková produkcia',
                    text: "Produkcia zameraná na tvorbu profesionálnych videí zo Stužkových slávností. Produkcia poskytuje rôzne balíčky pre študentov.",
                    img: '',
                    url: 'http://hanzlik.sk/'
                },
                {
                    id: 3,
                    name: 'Svadobná produkcia',
                    text: "Produkcia zameraná na tvorbu profesionálnych svadobných videí. Produkcia disponuje rozsiahlym tímom kameramanov.",
                    img: '',
                    url: 'http://svadobnaprodukcia.sk/'
                },
                {
                    id: 4,
                    name: 'Visuals for sale',
                    text: "Produkcia zameraná na tvorbu a predaj vizuálov a 'one take' videoklipov.",
                    img: '',
                    url: 'https://www.instagram.com/visualsforsale/?fbclid=IwAR1EA4kAXCKIMJn5bSt72v7vwMDu0FjxFtQNi9XhHk1myfT_RWf6gIp3qv4'
                }
            ]
        }
    }

    handleChange = event => {
        const { name, value} = event.target;
        this.setState({ [name]: value});
    }


    render(){
        return (
            <div className='dashboard-settings'>
                Under Contruction...
            </div>
        )
    }
}

export default DashSettings;