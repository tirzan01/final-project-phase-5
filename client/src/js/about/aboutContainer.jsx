import React from "react"
import ContactUs from "./contactUs"
import Description from "./description"
import Rating from "./rating"
import WhyUsingThisApp from "./whyUsingThisApp"

const AboutContainer = () => {
  return <div className="main">
    <WhyUsingThisApp />
    <Rating />
    <Description />
    <ContactUs />
  </div>
}

export default AboutContainer