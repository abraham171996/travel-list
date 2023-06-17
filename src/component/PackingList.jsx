import React from 'react'
;

const PackingList = ({items,onDeletItems,onToggleItem}) => {
 
  

  return (
    <div className='list'>
      <ul >
      
      {items.map(item=><Item item={item} onDeletItem={onDeletItems} onToggleItem={onToggleItem} key={item.id}  />)}
    </ul>
    </div>
  )
}

function Item({item,onDeletItem,onToggleItem}){
  return (
    <li>
      <input 
      type="checkbox"
      value={item.packed} 
      onChange={()=>onToggleItem(item.id)} 
      />
      <span style={item.packed ? {textDecoration:"line-through"} : {}}>{item.quantity} {item.description}</span>
      <button onClick={()=>onDeletItem(item.id)}>❌</button>
    </li>
  )
}

export default PackingList