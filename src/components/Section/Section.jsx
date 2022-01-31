import React from 'react';

export const Section = ({innerSection,titulo,sectionId}) => {
  return (
    <div className="section" id={sectionId}>

      <div className="container">

        <h2 className="titulo "> {titulo}</h2>

        <div className="row">

          {innerSection}
      
        </div>

      </div>
      
    </div>
  );
};
