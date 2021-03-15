import * as React from "react"

// styles
const homepageStyles = { //no scrolling on single page
  textAlign: "center",
  background: "#f9f9f9",
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  overflow: "hidden",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const helloWorldStyles = {
  color: "#FF0000", //the hex code for YouTube's red logo
  margin: "30px 0 40px 0",
  border: "none",
  background: "transparent",
  fontFamily: "inherit",
  fontWeight: "inherit",
  fontSize: "inherit",
  cursor: "pointer",
}

const loaderStyles = {
  color: "#d10000",
  position: "absolute",
  left: "0",
  top: "60px",
  width: "100%",
}

const iframeContainerStyles = { //allow for responsive sizing of the iframe container
  height: "0",
  paddingBottom: "52%",
  position: "relative",
}
const iframeStyles = {
  width: "80%",
  height: "80%",
  position: "absolute",
  margin: "0 10%",
  left: "0",
}

const handleHeaderClick = () => {
  window.open("https://www.google.com");
}

const hideLoader = (e) => {
  console.log(e);
  document.getElementById("kitten-loader").remove();
}

// markup
const Homepage = () => {

  return (
    <main style={homepageStyles}>
      <title>Homepage</title>
      <h1>
          <button style={helloWorldStyles} onClick={handleHeaderClick}>Hello World</button>
      </h1>
      <div style={iframeContainerStyles}>
        <span id="kitten-loader" style={loaderStyles}>...Loading...</span>
        <iframe 
          onLoad={hideLoader}
          title="homepage-kitten-video" 
          src="https://www.youtube.com/embed/kr4g2h5YmnU" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={iframeStyles}>
        </iframe>
      </div>
    </main>
  )
}

export default Homepage
