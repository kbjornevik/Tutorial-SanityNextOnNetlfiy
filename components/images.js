import { urlFor } from "../libconfig/sanity"

const Image = ({ identifier, image }) => {
  console.log("Identifier..:",identifier)
  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <img src={urlFor(image).auto("format")} />
    </div>
  )
}

export default Image