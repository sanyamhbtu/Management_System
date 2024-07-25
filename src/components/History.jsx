import React, {useContext } from 'react'
import { FormList } from '../store/Form_list';
import Chat from './Chat'
import style from './History.module.css'

function History({onMoreClick}) {
  
  const {deleteAllChat} = useContext(FormList)
  const {formList} = useContext(FormList)
  
  return (
     <><div className= {style.history}>
     <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
   <div className="list-group">
    
   <button className={style.btn} onClick={deleteAllChat}>Delete All</button>
   
     {formList.map((chat) => <Chat key={chat.id} chat ={chat} onMoreClick={onMoreClick}/>)}

     </div>
</div>
</div>
     </>
  )
}

export default History