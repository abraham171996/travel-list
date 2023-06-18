import React, { useState } from 'react'
;

const PackingList = ({items,onDeletItems,onToggleItem}) => {
 const [sortBy,setSortBy] = useState("input")
  let sortedItems;

  if(sortBy==="input")
   sortedItems=items;

  if(sortBy==="description") 
  sortedItems=items.slice().sort((a,b)=>
  a.description.localeCompare(b.description))

  if(sortBy==="packed") 
  sortedItems=items.slice()
  .sort((a,b)=>Number(a.packed) - Number(b.packed))

  return (
    <div className='list'>
      <ul >
      
      {sortedItems.map(item=><Item item={item} onDeletItem={onDeletItems} onToggleItem={onToggleItem} key={item.id}  />)}
    </ul>
    <div className='actions'>
      <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} >
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed</option>
      </select>
      <button></button>
    </div>
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