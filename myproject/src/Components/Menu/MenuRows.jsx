import PropTypes from 'prop-types';
import { formatCurrency } from '../Hooks/Helper';
import { AddItem, decrementItem, incrementItem } from '../Cart/CartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const MenuRows = ({ clothe }) => {
    const [quantity, setqunatity] = useState(0)
    // const EachItemQuantity = useSelector(store => store.cartData.cart.find(item => item.pizzaId === id)?.quantity ?? 0)
    const {
        id,
        image,
        stuff,
        Description,
        quantityavailable,
        Price,
    } = clothe
    const dispatch = useDispatch()

    const Addcarthandler = () => {


        const itemm = {
            id,
            image,
            stuff,
            Description,
            quantityavailable,
            Price,
            quantity,
        }
        dispatch(AddItem(itemm))
        setqunatity(0)

    }
    const addhandle = () => {
        incrementItem(setqunatity((i) => i + 1))
    }
    const delhandle = () => {
        if (quantity === 0) return;
        decrementItem(setqunatity((i) => i - 1))
    }
    return (
        <>
            <div className='flex justify-between mr-20'>

                <tr className='flex flex-row items-center gap-9 '>
                    <img className='w-20 h-20' src={image} />
                    <td>{stuff}</td>
                    <td className='text-center w-96'>{Description}</td>
                    <td className='fixed' style={{ right: '38rem' }}>{quantityavailable}</td>
                    <td className='fixed right-80' >{formatCurrency(Price)}</td>
                </tr>
                <div className='flex items-center gap-2'>
                    <button onClick={addhandle} className=' rounded-full w-8 h-8  border border-slate-400 mt-2 text-center'>+</button>
                    <button onClick={Addcarthandler} className=' rounded-full w-32 p-2 border border-slate-400  mt-2  text-center  ' disabled={quantity === 0}>{quantity} Add to Cart </button>
                    <button onClick={delhandle} className=' rounded-full w-8 h-8  border border-slate-400  mt-2  text-center  ' >-</button>
                </div>
            </div >

        </>
    )
}
MenuRows.propTypes = {
    clothe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        Price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        stuff: PropTypes.string.isRequired,
        Description: PropTypes.string,
        quantityavailable: PropTypes.number.isRequired,
        // Add other fields as needed
    }).isRequired,
};

export default MenuRows