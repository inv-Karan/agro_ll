import React from 'react';
import {Tag} from '../data';
import Sign from './sign_inout'

const ToolBar = () =><nav id="top-bar__navigation" className="top-bar__navigation navigation" role="navigation">
      <ul>
        {Tag.map((tool) => <li className="has-submenu">
          <a href={tool.link}>{tool.header}</a>
          {tool.list && <ul className="submenu">
            {tool.list.map((index) => <li><a href={index.link}>{index.text}</a></li>)};
          </ul>}
        </li>)};
        <Sign />
      </ul>
    </nav>

export default ToolBar;