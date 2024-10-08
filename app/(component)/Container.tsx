import React from 'react'

interface ContainerProps {
    children : React.ReactNode 
}

const Container = ({children} : ContainerProps) => {
  return (
    <div className='container px-7 xl:px-[110px] mx-auto'>
        {children}
    </div>
  )
}

export default Container
