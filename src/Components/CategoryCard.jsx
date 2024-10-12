import React from 'react'

const CategoryCard = (props) => {
  return (
    <div className='w-auto h-auto px-2 py-1 rounded-md font-semibold bg-slate-200 hover:text-white active:text-slate-100  active:bg-slate-950 hover:bg-slate-950'>
      {props.title}
    </div>
  )
}

export default CategoryCard
