import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export function ResultPage(){
 const resultPage = useSelector((state: RootState) => state.items.list)
 const isValue= resultPage.length>0

    if(isValue){
        return (
            <div className='flex-1 flex flex-col items-center gap-[30px] pt-[30px] px-[45px] sm:px-[12px] xs:flex-auto xs:border-t xs:border-grey-base xs:py-[30px]'>
                {resultPage.map(el=>{
                    if(el.name=== 'headline'){
                    return <h2 key={el.id} className='font-bold tracking-wider text-center text-lg-2 text-black'> {el.text} </h2>
                    }
                    if(el.name==='paragraph'){
                        return <p  key={el.id} className='break-words whitespace-pre-wrap text-center text-base text-blue-light tracking-wider'>{el.text}</p>
                    }
                    if(el.name==='button'){
                        return <button   key={el.id} className=' max-w-max bg-blue-darker text-center text-base text-grey-light tracking-wider px-[30px] py-[10px] rounded transition-colors duration-300 ease-in-out hover:bg-blue-dark disabled:bg-grey-dark disabled:text-blue-light'>{el.text}</button>
                    }
                    return <img  key={el.id} src={el.src} alt={el.name}  className='rounded'/>
                })}
            </div>
        )
    }

    return (
        <div className='flex-1 pt-[30px] px-[45px]'> Please, choose item in editor</div>
    )
}