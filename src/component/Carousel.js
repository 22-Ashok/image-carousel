import { useState } from 'react'

const Carousel = () => {

    const[currIndx,setCurrIndx] = useState(0);
    const list = ['igm1','img2','img3']

    function forwardBtn(){
       
       setCurrIndx(currIndx => (currIndx === list.length-1 ? 0 : currIndx += 1 ));
    //   setCurrIndx(currIndx => (currIndx === list.length-1 ? list.length-1 : currIndx += 1 ));
    }

    function backwardBtn(){
      
       setCurrIndx(currIndx => (currIndx === 0 ? list.length-1 : currIndx -= 1));
    //    setCurrIndx(currIndx => (currIndx === 0 ? 0 : currIndx -= 1));
    }

    return (
       <>
        <div className="flex items-center text-center justify-center">
            <button className="bg-black text-white rounded w-24" onClick={backwardBtn}>backward</button>
             <div>{list[currIndx]}</div>
            <button  className="bg-black text-white rounded w-24" onClick={forwardBtn}>forward</button>
        </div>
       </>
    )
}

export default Carousel