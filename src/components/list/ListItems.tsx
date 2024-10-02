import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Item } from './Item'
import { ItemComponent } from './ItemComponent'

export function ListItem(){
  const list = useSelector((state: RootState) => state.items.list)
  const isChecking = list.length > 0

  if(isChecking){
        return (
            <div className='min-h-[80vh] bg-grey-dark flex-1 xs:min-h-max'>
                <ul className='flex flex-col gap-[15px] p-[30px] sm:px-[12px] sm:gap-[10px]'> 
                    {list.map((el: Item)=><ItemComponent key={el.id} component={el} />)}
                </ul>
            </div>
        )
    }
    return  <p className='min-h-[80vh] bg-grey-dark flex-1 p-[30px] xs:min-h-[50vh]'> Please, choose item in editor</p>

}