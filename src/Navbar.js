import { data } from 'jquery';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Alert from './Alert';

export default function Navbar(props) {
    const [a, seta] = useState("");
    const [fo, setfo] = useState("");

    function dataget() {
        var e = document.getElementById("gh").value;
        seta(e);
        // setas(e);

    }
    function fun() {
        var e = document.getElementById("gh").value;

        var n = e.toUpperCase();
        alert("your text is convered into Uppercase");
        seta(n);
        document.getElementById("gh").value = n;
    }


    function fun2() {
        var e = document.getElementById("gh").value;
        var n = e.toLowerCase();
        alert("your text is converted into Lowercase");

        document.getElementById("gh").value = n;
    }
    function change() {
        var d = document.getElementById("color").value;
        console.log(d);
        document.getElementById("gh").style.color = d;

        // document.getElementById("gh").value.style.color."red;

    }
    const handlecopy = () => {
        console.log("i am copy");
        var text = document.getElementById("gh");
        text.select();
        // const c = navigator.language;
        // console.log(c);
        navigator.clipboard.writeText(text.value);
    }
    const clear = () => {
        document.getElementById("gh").value = "";
        seta('');

    }
    const changefont = () => {
        var a = document.getElementById("chfont").value;
        alert("your text is converted in " + a);
        document.getElementById("gh").style.fontFamily = a;


    }


    const [text, setText] = useState('');


    return (
        <>
            <nav className={`navbar navbar-${props.mode} navbar-fixed-top`}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#alignment-example" aria-expanded="false">
                            <span className="sr-only">{props.title}</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="">{props.title}</a>
                    </div>


                    <div className="collapse navbar-collapse" id="alignment-example">


                        <ul className="nav navbar-nav">
                            <li className="ac"><a href="">Home<span className="sr-only"></span></a></li>
                            {/* <li><a href="">Services</a></li>
                            <li><a href="">About</a></li> */}
                        </ul>


                        <form className="navbar-form navbar-right" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" />
                            </div>&nbsp;
                            &nbsp;
                            <button type="submit" className="btn btn-success">Search</button>&nbsp;&nbsp;
                            <span className='glyphicon glyphicon-off text-danger mt ' onClick={props.toggle}></span><span className='text-danger'>{props.modess}</span>

                        </form>

                    </div>


                </div>
            </nav>
      <Alert alert="this is alert"/>

            <div className='ttms' style={{ color: props.mode === `inverse` ? `white` : `black` }} >
                <div className="container">
                    <h3 className='text-center'>🗨️Enter the text you want to edit</h3>
                    <form action="">
                        <textarea className='form-control bdr' name="textareas" id="gh" cols="30" rows="10" placeholder='enter the text you want to edit' onKeyUp={dataget} style={{ backgroundColor: props.mode === `inverse` ? `#042743` : `white`, color: props.mode === "inverse" ? "white" : "black" }}></textarea>
                    </form><br />
                    <div className='df'>
                        <button className='btn btn-success ' onClick={fun}>click to Uppercase</button>&nbsp;
                        <button className='btn btn-success ' onClick={fun2}>click to Lowercase</button>&nbsp;
                        <button className='btn btn-success ' id="copy" onClick={handlecopy}>Copy</button>&nbsp;
                        <button className='btn btn-success ' onClick={clear}>clear</button>&nbsp;



                        Change color: <input type="text" id="color" placeholder="enter the color name" onChange={change} />
                        {/* Change Font: <input type="text" id="chfont" placeholder="enter the font name"  onKeyUp={changefont} /> */}
                        <div className='df2' onChange={changefont}>
                            <label for="cars">Change fonts:</label>
                            <select name="cars" id="chfont" className='bg-info text-danger'>
                                <optgroup label="Swedish Cars">
                                    <option value="ALGERIAN">ALGERIAN</option>
                                    <option value="Albertus ExtraBold">Albertus ExtraBold</option>

                                    <option value="Courier New">Courier New</option>
                                    <option value="monospace">monospace</option>
                                    {/* </optgroup> */}
                                    {/* <optgroup label="German Cars"> //it is used for outer drop list */}

                                    <option value="Arial Black">Arial Black</option>
                                    <option value="Agency fB">Agency fB</option>
                                    <option value="Arial">Arial</option>
                                    <option value="Arial Black">Arial Black</option>
                                    <option value="Bahnschrift">Bahnschrift</option>
                                    <option value="Calibri">Calibri</option>
                                    <option value="Cambria">Cambria</option>
                                    <option value="Cambria Math">Cambria Math</option>
                                    <option value="Leelawadee UI">Leelawadee UI</option>
                                    <option value="Time New Roman">Time New Roman</option>


                                </optgroup>
                            </select>

                            &nbsp;
                        </div>


                    </div>



                </div>

                <div className="container">
                    <h1 className='stick navbar-nav-fixed'>✅Text Summary</h1>
                    <p>🌟{a.length} character and {a.split(" ").length} words</p>
                    <p>🌟{0.008 * a.split(" ").length} Minutes read</p>
                    <h3>🧾Preview The Text </h3>
                    <div className='tx'>
                        <p className=' box '>{a.length > 0 ? a : "enter something in the text to preview it here"}</p>
                    </div>
                </div>
                <div className="extralength">
                    
                </div>
            </div>




        </>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: 'Text editor'
};