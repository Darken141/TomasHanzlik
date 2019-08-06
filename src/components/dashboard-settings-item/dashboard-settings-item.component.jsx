import React from 'react';

import './dashboard-settings-item.styles.scss';

const DashSettingsItem = ({id, name, text, img, url, handleChange}) => (
    <div className='settings-production-item'>
        <label>Nazov Stranky</label>
        <input 
            onChange={handleChange} 
            className='settings-input' 
            name='name' 
            type='text' 
            value={name} 
        />
        <label>Text</label>
        <input 
            onChange={handleChange} 
            className='settings-input' 
            name='text' 
            type='text' 
            value={text} 
        />
        <label>Obrazok</label>
        <input 
            onChange={handleChange} 
            className='settings-input' 
            name='img' 
            type='text' 
            value={img} 
        />
        <label>Odkaz</label>
        <input 
            onChange={handleChange} 
            className='settings-input' 
            name='url' 
            type='text' 
            value={url} 
        />
        <input className='submit' type='submit' value='submit'/>
    </div>
)

export default DashSettingsItem;