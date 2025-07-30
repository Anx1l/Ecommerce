import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titl from './Titl';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    console.log(products);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    },[products])

    return (

        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Titl text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-base text-gray=600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium accusamus nobis cupiditate maiores, dolores perferendis vel praesentium voluptatem laboriosam inventore, ab voluptate aut consectetur possimus repellendus illum aperiam quibusdam repudiandae.</p>
            </div>

            {/* rendering products*/}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>

    )
}

export default LatestCollection
