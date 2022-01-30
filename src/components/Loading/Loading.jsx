import React from 'react';
import loading from '../../assets/img/loading.gif'

export const Loading = () => {
  return <div className="col-md-3  col-6">

            <div className="card ">
                <div className="card-header text-center">
                <p className="no-dec" href="pages/comics/example/comic_view.html">Cargando Productos...</p>

                <img className="img-fluid" src={loading} alt="Comic Novedad Demon Slayer"/>

    

                </div>

            </div>
            </div>


};
