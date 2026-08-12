import React, { useRef } from 'react'

const DivRef = () => {
    let divRef = useRef(null);




  return (
    <div ref={divRef}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam corporis, commodi, expedita architecto maiores voluptate modi provident quisquam vitae ea molestias aut ipsum inventore quaerat? Obcaecati quod ipsam eum ea.
      <br /><br />
      <button onClick={() => alert(divRef.current.offsetHeight)}>Measure</button>
    </div>
  )
}

export default DivRef
