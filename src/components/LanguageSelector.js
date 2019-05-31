import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {

    return (
        <div>
          Select a language
          <i className='flag gb uk' onClick={() => this.context.onLanguageChange('english')} />
          <i className='flag pl' onClick={() => this.context.onLanguageChange('polski')} />
        </div>
    )
  }
}

export default LanguageSelector;