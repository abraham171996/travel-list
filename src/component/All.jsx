import React from 'react'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'
import { useState } from 'react'
const All = () => {
    const [items,setItems] = useState([])
 
    function handleAddItems(item){
      setItems((items)=>[...items,item])
    }
  
    function handleDeletItems(id){
      setItems((items)=>items.filter((item)=>item.id !== id))
    }
    function handleToggleItem(id){
      setItems((items)=>items.map((item)=>item.id ===id?{...item,packed:!item.packed}:item))
    }
    function handleClearList(){
      const confirmed = window.confirm("Are you sure delet all items?")
  
      if(confirmed) setItems([])
    }
    return (
      <div className='app'>
        <Logo/>
        <Form  onAddItems={handleAddItems}/>
        <PackingList items = {items} onDeletItems={handleDeletItems} onToggleItem={handleToggleItem} onClearList = {handleClearList}/>
        <Stats items={items}/>
      </div>
    )
}

export default All