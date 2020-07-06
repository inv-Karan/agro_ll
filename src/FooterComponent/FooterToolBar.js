import React from 'react';
import {Tag} from '../data';

const FooterToolBar = () =>
  <nav id="footer__navigation" className="navigation  text-lg-right">
    <ul>
      {Tag.map((tool) => <li className="active">
        <a href={tool.link}>{tool.header}</a>
      </li>)}
    </ul>
  </nav>

export default FooterToolBar;