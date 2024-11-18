import React from 'react'
import { allProducts } from '../api/Product'

function AllProduct() {
  return (
    <>
      <ul className="flex flex-wrap gap-5 w-full h-full items-start justify-center ">
          {allProducts.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer bg-cyan-100 p-5 rounded-xl bg-opacity-20 hover:bg-green-100"
            >
              {/* <Link to={`/product/${item.id}`}> */}
                <img
                  className="w-[18vw] h-[40vh] rounded-lg"
                  src={item.image}
                  alt={item.title}
                />
              {/* </Link> */}
              <p className="font-bold w-[15vw]">{item.title}</p>
              <p className="text-[20px]">{item.price}</p>
              <p className="text-[13px]">{item.discount}</p>
            </li>
          ))}
        </ul>
    </>
  )
}

export default AllProduct
