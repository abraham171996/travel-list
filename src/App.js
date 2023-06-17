import React from 'react'
import Logo from './component/Logo'
import Form from './component/Form'
import PackingList from './component/PackingList'
import Stats from './component/Stats'
import { useState } from 'react'

const App = () => {
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
  return (
    <div className='app'>
      <Logo/>
      <Form  onAddItems={handleAddItems}/>
      <PackingList items = {items} onDeletItems={handleDeletItems} onToggleItem={handleToggleItem}/>
      <Stats/>
    </div>
  )
}

export default App
