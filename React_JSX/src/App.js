function App() {
 /*  const helloMessage = null; */
  // using JS variables for attributes
  const imageWidth = 400;
  // defining object for inline-styles
  const headingStyles = {
    color: 'blue',
    // chaning to camel case for JSX
    backgroundColor: 'red'
  }
  return (
    <div>
      {/* past JS code inside of HTML with {} */}
      {/* <h1 style={headingStyles}>{helloMessage ? helloMessage : 'Bye'}</h1> */}
      {/* this inline-style will not work in JSX:
      <h1 style="color: blue;">{helloMessage ? helloMessage : 'Bye'}</h1> */}
      {/* defining styles without a variable:
          {{}} required, 1. {} for using JS, 2. {} for creating an JS object
      <h1 style={{
        color: 'blue',
        backgroundColor: 'red'
      }}>{helloMessage ? helloMessage : 'Bye'}</h1> */}
      <img width={imageWidth} src="https://placebear.com/500/600" alt="" />
      {/* Beware to close EVERY tag in JSX
          Error:
          <input type="text" value="lol"> 
          Correct:
          <input type="text" value="lol" /> 
          <input type="text" value="lol"></input> */}
    </div>
  );
}

export default App;
