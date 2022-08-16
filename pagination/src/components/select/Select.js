import React from 'react';

import './Select.css'

function Select({onChange}) {
    return (
        <div className="box">
            <select onChange={onChange} required form="form" name="role" id="pet-select">
                <option value="">Your role</option>
                <option value="admin">Admin</option>
                <option value="observer">Observer</option>
                <option value="user">User</option>
            </select>
        </div>
    );
}

export default Select;