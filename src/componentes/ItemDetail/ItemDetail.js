import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({item}) => {

    const {name, price, img, description} = item;

    const productsAdded = (itemsToCart) => {
        console.log('Items added to cart: ', itemsToCart);
    }

    return (
        <div className="itemDetail">
            <div>
                <img src={img} className="cover" alt="loading..." />
            </div>

            <div className="details">
                <h2>{name}</h2>
                <p>{description}</p>
                <span>{price} $ ARS</span>
                <ItemCount stock={10} initial={1} onAdd={productsAdded}/>
            </div>

        </div>
    );



}

export default ItemDetail