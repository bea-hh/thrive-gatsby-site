import * as React from "react"

// styles
const homepageStyles = { //repeating cat image in keeping with the cute cat appeal of the page, no scrolling, single page
  backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70df9491-e338-4869-8d13-06bb1fa30522/d7iwvfi-0e74ab7f-c86c-4edf-b3fc-2268615cb0be.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzBkZjk0OTEtZTMzOC00ODY5LThkMTMtMDZiYjFmYTMwNTIyXC9kN2l3dmZpLTBlNzRhYjdmLWM4NmMtNGVkZi1iM2ZjLTIyNjg2MTVjYjBiZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.szJVV9PQ5QY_OF7eayaMDvDDLmPAE5BUV1KVIVCcFiE)",
  backgroundRepeat: "repeat", 
  height: "100%",
  width: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  overflow: "hidden",
}

const singleColumnStyles = { //single column for visual interest, in keeping with standard blog format
  textAlign: "center",
  background: "#ffe0e0",
  height: "100%",
  width: "80%",
  position: "absolute",
  margin: "0 10%",
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
  // In most if not all cases, external links should open in a new tab. This way the user's kitten video won't be interrupted by a wayward click!
  window.open("https://www.google.com");
}

const hideLoader = () => {
  // in case of limitations on external packages and to keep the code lean, opted for a simple default load text that is removed upon video load success/failure
  document.getElementById("kitten-loader").remove();
}

// markup
const Homepage = () => {
  return (
    <main style={homepageStyles}>
      <title>Homepage</title>
      <div style={singleColumnStyles}>
        <h1>
            <button style={helloWorldStyles} onClick={handleHeaderClick}>Hello World</button>
            {/* Opted for a button within the h1 element that inherits h1 styling, but also provides accessible navigation via tab/enter keys. */}
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
      </div>
    </main>
  )
}

export default Homepage
