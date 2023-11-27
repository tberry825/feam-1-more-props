
function ProductCard (props) {
    const { title, price, description } = props;
     
    return (
        <div className="pro-card">
            <h2>Product Card</h2>
            <p><strong>Title:</strong> Potatoes</p>
            <p><strong>Price:</strong> $1.50</p>
            <p><strong>Description:</strong> Delicious Idaho Potatoes</p>
            <h2>Product Card2</h2>
            <p><strong>Title:</strong> Apples</p>
            <p><strong>Price:</strong> $3.50</p>
            <p><strong>Description:</strong> Granny Smith Green Apples</p>
            <h2>Product Card3</h2>
            <p><strong>Title:</strong>Strawberries</p>
            <p><strong>Price:</strong> $2.50</p>
            <p><strong>Description:</strong>Strawberry Farms fresh strawberries</p>
            
        </div>
    );

}

export default ProductCard;