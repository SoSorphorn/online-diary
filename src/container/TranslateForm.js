import React,{Component} from 'react'
import { withNamespaces } from 'react-i18next'
import Select from 'react-select'
import {options} from '../config/options'

class TranslateForm extends Component{
  constructor(props){
    super(props);

    this.state={
      lang: options[0],
    }
  }
  changeLang = (lang) => {
    const { i18n } = this.props;
    const { value } = lang;
    this.setState({
      lang,
    });
    i18n.changeLanguage(value);
  };

  render(){
    const {lang} = this.state;
    const {t} = this.props;
    
    return(
      <div className="App-Root">
        <Select
           value={lang}
           onChange={this.changeLang}
           options={options}
        />
        <h3 className="text-center pt-5">{t('title')}</h3>
        <p className="text-center pt-2">{t('description')}</p>
      </div>
    )
  }
}

export default withNamespaces('translations')(TranslateForm)