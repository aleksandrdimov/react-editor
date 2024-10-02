import { useDispatch } from 'react-redux'
import { addItem } from '../../app/list'

const editorListItems = [
    { icon: 'headline-icon', name: 'headline', text: '', placeholder:'Input text'}, 
    { icon: 'paragraph-icon', name: 'paragraph', text: '', placeholder:'Input text' }, 
    { icon: 'button-icon', name: 'button', text: '', placeholder:'Input buttom name'}, 
    { icon: 'image-icon', name: 'image', src: '', placeholder:'Input image src' }
]

export function EditorListItems() {
    const dispatch = useDispatch()

    return (
        <ul className='w-[270px] flex flex-wrap justify-center p-[30px] gap-[10px] sm:px-[12px] sm:w-[120px] xs:w-[90px]'>
            {editorListItems.map((item,index)=>
                <li key={index} 
                className='cursor-pointer flex-1 shrink grid justify-items-center items-center gap-[10px] min-w-[83px] max-h-[83px] bg-grey-light rounded-md px-[10px] py-[15px] hover:bg-grey-base/70 transition-colors duration-500 ease-in-out xs:min-w-[70px] xs:px-1 xs:py-2'
                onClick={()=>{
                    dispatch(addItem({item}))
                }}    
                >
                    <img src={`/${item.icon}.svg`} alt={item.name} />
                    <h3 className='capitalize text-sm font-regular tracking-wider'>{item.name}</h3>
                </li>
            )}
        </ul>
    )
}