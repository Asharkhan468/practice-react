import React from 'react'

function Card({title , description , button , src}) {
  return (
    <>

    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
<img src={src} alt="" />      
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{button}</button>
    </div>
  </div>
</div>


    </>
  )
}

export default Card


