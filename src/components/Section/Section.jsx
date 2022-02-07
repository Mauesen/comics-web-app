import React from 'react';

export const Section = ({titulo,sectionId,subtitulo,children}) => {
  return (
    <div className="section" id={sectionId}>

      <div className="container">

        <h2 className="titulo "> {titulo} {subtitulo? `: ${subtitulo}` : ''}</h2>

        <div className="row center">

          {children}
      
        </div>

      </div>
      
    </div>
  );
};
