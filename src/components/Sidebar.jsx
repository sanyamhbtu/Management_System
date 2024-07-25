import React from 'react'

import style from './Sidebar.module.css'
function Sidebar({view , setView}) {
  
  return (
    <div className={style.sidebar}>
    <div className="-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"  style={{width: "280px" , height: "600px", }}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Helper Section</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item"  onClick={() => {setView("showHistory")}}>
        <a href="#" className={`nav-link ${view ==="showHistory" && "active"}`}aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Show History
        </a>
      </li>
      <li onClick={() => {setView("creatChat")}}>
        <a href="#" className={`nav-link  ${view ==="creatChat" && "active"}`}>
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Creat Chat
        </a>
      </li>
      
    </ul>
    <hr />
  </div>
  </div>
    
  )
}

export default Sidebar