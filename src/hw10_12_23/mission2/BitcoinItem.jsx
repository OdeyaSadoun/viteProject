import React from 'react'

const BitcoinItem = (props) => {

    const item = props.item;
    let imgUrl = `https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/${item.id}.png`;
    return (
        <div className='container mx-auto d-flex shadow border-info p-3 col-4 m-2'>
            <div>
                <img src={imgUrl} />
            </div>
            <div>
                <h3>{item.name}</h3>
                <p>value: {item.price_usd}</p>
            </div>

        </div>
    )
}

export default BitcoinItem