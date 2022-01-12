import "../styles/global.css"
import NavBar from "../components/NavBar"
//  When using Next.js you’ll most likely need to override the global App component to get access to some features like 
// persisting state, or global layouts. This can be done by creating a file _app.js directly in the ./pages/ folder. 
// If this file exists, then Next.js will use this instead of the default App.
// The Component prop is the page view that will be rendered. We can use this to pass our own props to or wrap with layout/context components.
// The pageProps prop is the props that each page will receive when rendered. It is important to remember to pass these along.

const MyApp = ({ Component, pageProps }) => {
  console.log("MyApp:" ,pageProps)
  return (

    <>
      <div className="mainContainer">
      <NavBar />
      <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp