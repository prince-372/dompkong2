import React, { useState } from 'react'

const Tabs = () => {
  
  const [tab, settab] = useState(second)
   const handle = (tabs)  =>
   {
      settab(tabs);
   }

  return (
    
    <div>
        <button className={`tab === 1 ? 'bg-danger' : ''}`}
        onClick={handle(1)}>tab1</button>
        <button>tab2</button>
        <button>tab3</button>
    </div>
  )
}

export default Tabs