function FoodCard(props) {
    const {imageName, dishName, rate, details} = props;
    return (
        <div>
            <picture>
                <img src={imageName} alt={imageName} width="100%" height="150"></img>
            </picture>
            <div className="details">
                <figcaption>
                    <strong> {dishName}</strong>
                    <span>{rate}</span>
                </figcaption>
                <p>{details}</p>
                <div>
                    <strong>order a delivery </strong>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;