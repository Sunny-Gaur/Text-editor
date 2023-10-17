import React, { useState } from 'react'

export default function About() {
  const[mystyle,setmystyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const[btntext,setbtntext]= useState('Enable Dark Mode')

  const check = ()=> {
    if(mystyle.color=="black"){
      setmystyle({
        color:'white',
        backgroundColor:'black'
      })
      setbtntext("Disable Dark Mode");
    }
    else{
      setmystyle({
        color:'black',
        backgroundColor:'white'
      })
      setbtntext("Enable Dark Mode");


    }
  }
  return (
    <div style={mystyle}>
      <h1 className=' text-center'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="bdr2">
          <div className="accordion-item">
            <h2 className="accordion-header bg-info" id="headingOne">
              <button className="text-info ml" type="button" data-toggle="collapse" data-target="#collapseOne">
                <h4 className=''>Documentaion</h4>
              </button>
            </h2>
            <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="accordion-body"style={mystyle}>
                <strong>This 6568648is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header bg-danger" id="headingTwo" >
              <button className=" text-info ml" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h4>Success info</h4>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header bg-info " id="headingThree">
              <button className="text-info ml" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <h4>Accordion Item #3</h4>   
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <button className="btn black " onClick={check}>{btntext}</button>
      </div>
    </div>

  )
}
