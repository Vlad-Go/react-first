import React from 'react';

// import Main from './components/Main/Main';


import './Form.scss';

class Form extends React.Component {

 render(){
   return(
     <form  onSubmit={this.props.getingWeather}>
      <input type="text" name="city" className="form__input"/>
      <button className="form__submit" type="submit">Search</button>
     </form>
   );
 }
}
export default Form;
