import React from 'react';
import {address} from '../data';

const Address = () => 
<address>
{address.map((a) =>
    <p>
        {a.region}
    </p>
)}
{address.map((b) =>
    <p>
        {b.contact} <br />
        <a href={b.website}>{b.text}</a>
    </p>
)}
</address>

export default Address;