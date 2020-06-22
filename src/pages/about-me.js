import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutMe extends React.Component {
  render() {

    return (
      <Layout>
        <SEO
          title="About Me"
          keywords={[`steffany`, `bahamon`, `developer`, `engineer`]}
        />
        <h1>
         About Me
        </h1>
        <h2>TL;DR Version:</h2>
        <ul>
          <li>Cyber Security Educator at $(SECCOMP)</li>
          <li>Northwestern University Grad, Industrial Engineering and Economics (Go 'Cats!)</li>
          <li>Former webdev at $(BANK)</li>
          <li>Likes: the concept of tech for good, intersectional feminism, social justice, hiking, music, dogs, and bodies of water</li>
          <li>Dislikes: the execution of tech for good, Fox News, horseradish, and wet socks</li>
        </ul>
        <h2>DR Version:</h2>
        <p> 
          Hi! Thanks for coming to my humble website. This is mostly an effort to keep myself coding and writing, both skills that I can always use a bit more practice at. 
          My main interests lie in technology, which is everything and also nothing nowadays. 
          I've been lucky enough to have a career in tech thus far, and this blog is a little bit of an effort on my end to log anything cool I do and know on Al Gore's internet for others to benefit from and for me to remember.
          Please feel free to reach out to me on Twitter if you have any questions or comments! I might take a bit to get back to you, but I will eventually.
        </p>
      </Layout>
    )
  }
}

export default AboutMe
