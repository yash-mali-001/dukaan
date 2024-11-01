import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Women</h1>
      <hr/>
      <div className="popular-item">
      {/*       
      map() function is used to iterate over an array and render a list of elements dynamically. It's a common way to display data from an array in your components */}


        {data_product.map((item ,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
