import React from 'react'
import { Outlet } from 'react-router'
import { MyButtonNav } from './MyButtonNav'

export const MyLayout = () => {
  return (
    <>
      <Outlet/>{ /*ide kerül minden oldal*/}
      <MyButtonNav/>
    </>
  )
}