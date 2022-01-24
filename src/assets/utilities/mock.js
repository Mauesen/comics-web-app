/* import nov1 from '../img/novedades/nov1.jpg';
import nov2 from '../img/novedades/nov2.jpg'; */
import nov3 from '../img/novedades/nov3.jpg';
import nov4 from '../img/novedades/nov4.jpg';


const productos = [
    { id: '1', stock:'5', publisher: 'Shonen Jump', name: 'Demon Slayer', issue:'315', price: '$550', cover:'https://depor.com/resizer/9Fq3Us_qqAKF6VPTIKVuYt44ccg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/TXFX733REBAO7IPVSSOBNS3UJU.JPG' },
    { id: '2', stock:'10', publisher: 'Dc Comics', name: 'Batman', issue:'250', price: '$1000', cover:'https://www.latercera.com/resizer/zm-7NqbfoqZ_JK2ndmAgVem-3zo=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/FMIBHJ3IVNEHZKFJ7SA5GXG76Y.jpg' },
    { id: '3', stock:'3', publisher: 'Marvel Comics', name: 'Wolverine', issue:'180', price: '$850', cover:{nov3} },
    { id: '4', stock:'8', publisher: 'Shonen Jump', name: 'One Piece', issue:'990', price: '$550', cover:{nov4} }
    
];


export const getFetch = new Promise( (res,rej)=> {
    
    let condition= true;

    if (condition) {
        setTimeout(()=>{
            
            res(productos)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} )