import React from 'react'
import ReactDom from 'react-dom/client'
import Carousel from './src/component/Carousel'

const App = () => {

    return (
        <>
         <h1 className="text-xl font-bold text-center my-3 text-green-600" > Image Carousel </h1>
         <Carousel />
        </>
    )
}



ReactDom.createRoot(document.getElementById("root")).render(<App />) 