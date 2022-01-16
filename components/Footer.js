import Link from "next/link"
import Image from 'next/image'
import imgAboutme  from '../images/SketchAboutMe.jpg'

const Footer = () => {
    return ( 
     <div className="centered-container">
      <div className="footer">
         <h2>Hello i'm Knut 👋 </h2> 
          <p>Curiosity is the driving force to get me out of bed and meet life.</p>
          <Image src={imgAboutme} 
          width={200}
          height={250}
          alt="Knut"/>

          
        <p>I 💖 to make things</p>
        <p>© Knut Bjørnevik    </p>
      
      </div>
      </div>
    )
  }
  
  export default Footer