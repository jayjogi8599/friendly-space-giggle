import React,{useState}from "react";


function Textform(props) {

    const handleOnClick = () => {
      let newText = text.toUpperCase();
      settext(newText)
      props.showAlert('Converted to UpperCase', 'success')
    }
    const handleOnChange = (event) => {
      settext(event.target.value)
    }
    const handleOnloClick = () => {
      let lowtext = text.toLowerCase();
      settext(lowtext)
      props.showAlert('Converted to LowerCase', 'success')
    }
  
    const handleOnClear = () => {
      let cleartext = ('');
      settext(cleartext)
      props.showAlert('Text cleared', 'success')
    }
  
    const handleCopy = () => {
      let text = document.getElementById('my-box');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copied to clipboard', 'success')
    }
    const handleExtraSpaces = () => {
      let newtext = text.split(/[ ]+/);
      settext(newtext.join(' '))
      props.showAlert('Extras speaces Removed', 'success')
    }
  
  
  
    const [text, settext] = useState('')
    return (
      <>
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#c7c5b3' : 'white' }} id="my-box"
              rows="10"></textarea>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleOnClick}>Convert to
            UpperCase</button>
          <button type="button" className="btn btn-secondary mx-1" onClick={handleOnloClick}>Convert to
            LowerCase </button>
          <button onClick={handleCopy} type="button" className="btn btn-primary mx-1">CopyText</button>
          <button type="button" className="btn btn-secondary mx-1" onClick={handleOnClear}>Clear Text
          </button>
          <button type="button" className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>Remove Extra Spaces
          </button>
  
        </div>
        <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          <h2> Your text Summary</h2>
          <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
          <p>{0.008 * text.split(' ').length} Minutes Read </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it hear '}</p>
        </div>
      </>
  
  
    )
  }
  export default Textform;
  