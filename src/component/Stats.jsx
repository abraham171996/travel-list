import React from 'react'

const Stats = ({items}) => {
  if(!items.length)
    return(
      <p className='stats'>
        <em>
          Start adding some items to your packing list 🚀
        </em>
      </p>
    )

  const numItems = items.length;
  const numPcaked = items.filter((item)=>item.packed).length
  const percentage = Math.round((numPcaked / numItems) *100)
  return (
    <footer className='stats'>
      <em>
        {percentage===100?'You got everything! Ready to go ✈'
        :`💼 You have ${numItems } items on your list, and you already packed ${numPcaked} (${percentage}%)`
        }
      
      </em>
    </footer>
  )
}

export default Stats