import { Item } from '../list/Item'
import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeItem, changeValue,incrementPosition,decrementPosition,copyItem,deleteItem } from '../../app/list'
import { RootState } from '../../app/store'

interface ItemProps {
    component: Item
}

export const ItemComponent: FC<ItemProps> = ({ component}) => {
    const listLength = useSelector((state: RootState) => state.items.list)
    const [value, setValue] = useState('');
    const dispatch = useDispatch()

    const clickItem = () => {
        dispatch(activeItem(component.positionId))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        dispatch(changeValue({ positionId: component.positionId, value: event.currentTarget.value }))
    }

    const incrementItemPosition =()=>{
        dispatch(incrementPosition(component.positionId))
    }

    const decrementItemPosition =()=>{
        dispatch(decrementPosition(component.positionId))
    }

    const copyComponent = ()=>{
        dispatch(copyItem(component.positionId))
    }

    const deleteComponent=()=>{
        dispatch(deleteItem(component.positionId))
    }


    let inputValue = !value ? component.text || component.src:value

    if (!component.active) {
        return (
            <li onClick={clickItem} className='cursor-pointer flex-1 shrink grid justify-items-center items-center gap-[10px] bg-white rounded-md px-[10px] py-[15px] hover:bg-blue-lighter/50 transition-colors duration-700 ease-in-out xs:py-[10px] xs:gap-[5px]'>
                <img src={`/${component.icon}.svg`} alt={component.name} />
                <h3 className='capitalize text-sm font-regular tracking-wider'>{component.name}</h3>
            </li>
        )
    }
    return (
        <li className='cursor-pointer relative flex-1 shrink grid justify-items-center items-center gap-[10px] bg-blue-lighter rounded-md px-[10px] py-[15px] transition-colors duration-700 ease-in-out  xs:py-[10px] xs:gap-[5px]'>
            <img src={`/${component.icon}.svg`} alt={component.name} />
            <h3 className='capitalize text-sm font-regular tracking-wider'>{component.name}</h3>
            <div className='w-full bg-white p-[5px] rounded-sm'>
                <input placeholder={component.placeholder} type="text" onChange={handleChange} value={inputValue} className='p-[5px] w-full text-black text-xs rounded-sm border border-grey-base  placeholder:text-blue-lighter' />
            </div>

            <div className='absolute z-10 -top-[27px] right-[13px] flex justify-center items-center gap-[5px]'>
                <div className=' flex justify-center items-center gap-[5px] bg-blue-dark rounded-t p-[3px]'>
                    <svg onClick={decrementItemPosition} className={`${component.positionId===listLength.length ?'disabled':''} arrow cursor-pointer`} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className=' transition-all duration-500 ease-in-out' fillRule="evenodd" clipRule="evenodd" d="M9.875 14.6162V4.24999H11.125V14.6162L15.0581 10.6831L15.9419 11.5669L10.5 17.0087L5.05813 11.5669L5.94188 10.6831L9.875 14.6162Z" fill="white" />
                    </svg>
                    <svg onClick={incrementItemPosition} className={`${component.positionId===1 ?'disabled':''} arrow cursor-pointer`} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className=' transition-all duration-500 ease-in-out' fillRule="evenodd" clipRule="evenodd" d="M11.125 6.38376V16.75H9.875V6.38376L5.94187 10.3169L5.05812 9.43313L10.5 3.99126L15.9419 9.43313L15.0581 10.3169L11.125 6.38376Z" fill="white" />
                    </svg>

                </div>

                <div className=' flex justify-center items-center gap-[5px] bg-blue-base rounded-t p-[3px]'>
                    <svg className='cursor-pointer copy' onClick={copyComponent} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="21" rx="2" fill="#4B97B8" />
                        <path className=' transition-all duration-500 ease-in-out'  fillRule="evenodd" clipRule="evenodd" d="M13 13V15.5C13 16.2202 12.4702 16.75 11.75 16.75H5.5C4.77982 16.75 4.25 16.2202 4.25 15.5V9.25C4.25 8.52982 4.77982 8 5.5 8H8V5.5C8 4.77982 8.52982 4.25 9.25 4.25H15.5C16.2202 4.25 16.75 4.77982 16.75 5.5V11.75C16.75 12.4702 16.2202 13 15.5 13H13ZM11.75 13H9.25C8.52982 13 8 12.4702 8 11.75V9.25H5.5V15.5H11.75V13ZM9.25 5.5V11.75H15.5V5.5H9.25Z" fill="white" />
                    </svg>
                    <svg className='cursor-pointer cart' onClick={deleteComponent} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className=' transition-all duration-500 ease-in-out'  d="M15.6563 4.87501H12.8438V3.9375C12.8438 3.41953 12.4242 3 11.9063 3H9.09377C8.5758 3 8.15627 3.41953 8.15627 3.9375V4.87501H5.34378C4.82581 4.87501 4.40628 5.29454 4.40628 5.81251V6.75001C4.40628 7.2675 4.82581 7.68703 5.34284 7.68751H15.6568C16.1743 7.68703 16.5938 7.2675 16.5938 6.75001V5.81249C16.5938 5.29454 16.1742 4.87501 15.6563 4.87501ZM11.9063 4.87501H9.09377V4.40624C9.09377 4.1475 9.30377 3.93748 9.56251 3.93748H11.4375C11.6963 3.93748 11.9063 4.14748 11.9063 4.40624V4.87501ZM5.34376 16.125C5.34376 17.1605 6.18328 18 7.21876 18H13.7813C14.8167 18 15.6563 17.1605 15.6563 16.125V8.62499H5.34376V16.125ZM12.375 10.0313C12.375 9.77251 12.585 9.5625 12.8438 9.5625C13.1025 9.5625 13.3125 9.77249 13.3125 10.0313V15.6563C13.3125 15.915 13.1025 16.125 12.8438 16.125C12.585 16.125 12.375 15.915 12.375 15.6563V10.0313ZM10.0313 10.0313C10.0313 9.77251 10.2413 9.5625 10.5 9.5625C10.7588 9.5625 10.9688 9.77249 10.9688 10.0313V15.6563C10.9688 15.915 10.7588 16.125 10.5 16.125C10.2413 16.125 10.0313 15.915 10.0313 15.6563V10.0313ZM7.68751 10.0313C7.68751 9.77251 7.8975 9.5625 8.15627 9.5625C8.41503 9.5625 8.62503 9.77249 8.62503 10.0313V15.6563C8.62503 15.915 8.41503 16.125 8.15627 16.125C7.8975 16.125 7.68751 15.915 7.68751 15.6563V10.0313Z" fill="white" />
                    </svg>

                </div>
            </div>
        </li>
    )
}