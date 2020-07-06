import React from 'react';

    // hash: '#',
let subClass = [
    'fontello-twitter', 
    'fontello-facebook', 
    'fontello-linkedin-squared'
];

const SocialButtons = () => 
<div className="social-btns">
    {subClass.map((h) => 
    <a href={'/'}>
        <i className={h}>
        </i>
    </a>
    )}
</div>

export default SocialButtons;