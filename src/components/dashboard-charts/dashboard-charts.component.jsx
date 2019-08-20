import React from 'react';

import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

const DashCharts = () => (
    <main className='main-charts'>
        <div className='header-main'>
            <div className='header-main__heading'>
                <h2 className='header-main__heading-primary'>
                    Prehlad náštevnosti
                </h2>
            </div>
            <div className='charts-container'>
                <div className='charts-container__chart'>
                    <Doughnut data={data} />
                </div>
                <div className='charts-container__chart'>
                    <Bar
                        data={data1}
                        options={{
                        maintainAspectRatio: false
                        }}
                    />
                </div>
            </div>
        </div>
    </main>
)

export default DashCharts;