import comicImg from '../img/novedades/nov1.jpg';

const productos = [
    { id: '1', publisher: 'Shonen Jump', name: 'Demon Slayer', issue:'315', price: '$550', foto:{comicImg} },
    { id: '2', publisher: 'Dc Comics', name: 'Batman', issue:'250', price: '$1000', foto:{comicImg} },
    { id: '3', publisher: 'Marvel Comics', name: 'Wolverine', issue:'180', price: '$850', foto:{comicImg} },
    { id: '4', publisher: 'Shonen Jump', name: 'One Piece', issue:'990', price: '$550', foto:{comicImg} }
    
];


export const getFetch = new Promise( (res,rej)=> {
  
    let condition= true;

    if (condition) {
        setTimeout(()=>{
            
            res(productos)        
        }, 5000)
    }else{
        rej('404 not found')
    }
} )