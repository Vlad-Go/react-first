import React from 'react';

// import Main from './components/Main/Main';


import './DataList.scss';

const DataList = ({temp , sunset  ,weather , weatherDescription , sunrise , pressure , error}) =>{


 return (
     <ul className="data-list">

        {error ? <li className='error'>{error}</li>
        :
        <>
         <li className="data-list__item temp">weather:  <span className="value"> {weather}</span></li>
         <li className="data-list__item sunset">weatherDescription:  <span className="value">  {weatherDescription}</span></li>
         <li className="data-list__item sunset">temp:  <span className="value">  {temp}</span></li>
         <li className="data-list__item sunset">sunrise:  <span className="value">  {sunrise}</span></li>
         <li className="data-list__item sunset">sunset:  <span className="value">  {sunset}</span></li>
       </>
      }



     </ul>
  );
}
export default DataList;
