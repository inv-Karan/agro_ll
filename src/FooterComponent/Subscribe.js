import React from 'react';

const Subscribe = () => 
<div className="col-12 col-lg-5 col-xl-4 offset-xl-1">
<div className="footer__item">
    <h5 className="h6">Get a newslatter</h5>

    <form className="form--horizontal" >
        <div className="input-wrp">
            <input className="textfield" name="s" type="text" placeholder="Your E-mail" />
        </div>

        <button className="custom-btn custom-btn--medium custom-btn--style-1" type="submit">subscribe</button>
    </form>
</div>
</div>

export default Subscribe;