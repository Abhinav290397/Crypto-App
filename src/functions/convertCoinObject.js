const coinObject = (data,setState) => {
    setState({
        id:data.id,
        name:data.name,
        symbol:data.symbol,
        image:data.image.large,
        desc:data.description.en,
        price_change_percentage_24h:data.market_data.price_change_percentage_24h,
        total_volume:data.market_data.total_volume.usd,
        current_price:data.market_data.current_price.usd,
        market_cap:data.market_data.market_cap.usd,
    });
}
export default coinObject;
//Why we use this-
//jo data caoinpage.js me jo api hai usse aa raha h vo alag naam se aa raha h jaise -
//-name aa raha h data.name form me and so on. So to made it simple we named it in -
//easier way using objects.Thats why we use this js file.