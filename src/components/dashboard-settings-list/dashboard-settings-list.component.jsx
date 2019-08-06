import React from 'react';

import DashSettingsItem from '../dashboard-settings-item/dashboard-settings-item.component';

import './dashboard-settings-list.styles.scss';

const DashSettingsList = ({ productions, handleChange }) => (
    <div className='settings-list'>
    {productions.map(({ id, ...otherProps}) => (
        <DashSettingsItem key={id} {...otherProps}/>
    ))}
    </div>
)

export default DashSettingsList;