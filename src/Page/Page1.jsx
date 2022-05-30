import { Link } from "react-router-dom"
import React from "react"

export const Page1 = () =>{
  return(
    <>
      <div>Sub Page</div>
      <Link to="SubPage">Sub Page</Link>
    </>
  )
}