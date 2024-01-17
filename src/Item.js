const Item = ({oneToy}) => {
    return ( 
        <>
        <h2>{oneToy.name}</h2>
        <h2>מחיר: {oneToy.price}</h2>
        <img src={oneToy.imgUrl}/>
        <div>למשחק אין קשר לתמונה🤣</div>
        </>
     );
}
 
export default Item;