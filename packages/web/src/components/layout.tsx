import type { ReactNode } from 'react'
import React from 'react'
import { Footer } from './footer'
import { Header } from './header'

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
