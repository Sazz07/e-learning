import Image from 'next/image'
import placeholderImage from '../../../public/placeholderImage.jpg';

export default function Products({ product, handleAddToCart, cart, setCart }) {
    const { img, category, name, price, ratings } = product;
    return (
        <div className='mt-10 lg:mt-0 border relative'>
            <div className='px-4 pb-20 pt-4'>
                <Image
                    src={img ? img : placeholderImage}
                    alt='image'
                    width={300}
                    height={200}
                    className='object-cover w-full rounded'
                />
                <div className='pt-5'>
                    <p className='text-lg text-gray-700'>{category}</p>
                    <h2 className='text-2xl font-bold truncate'>{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button
                className='py-2 bg-teal-600 text-white hover:bg-teal-800 w-full absolute bottom-0 border border-t-0'
                onClick={() => setCart([...cart, product])}
            >Add to cart
            </button>
        </div>
    )
}
