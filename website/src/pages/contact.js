import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact | {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div>
          <h1 className="post-title">Contact us</h1>
          <div className="primary-content">
            If you are interested to join the lab or collaborate, please do not hesitate to send
            Titipat an email or using the form in this page &rarr;
          </div>
          <div className="primary-content">
            <b>Undergraduate students: </b>
            Please contact Titipat to arrange a short meeting to discuss
            about research and/or potential projects.
          </div>
          <div className="primary-content">
            <b>Graduate students: </b>
            Due to limitation of the Mahidol university's rule, I cannot hire graduate
            students yet. If you are interested in doing research with Titipat,
            please email and arrange a discussion before applying. You can potentially apply to the
            Department of Biomedical engineering at Mahidol University, Vidyasirimedhi Institute of
            Science and Technology (VISTEC), or Chulalongkorn University, Thailand, where I
            can co-advise. There are multiple options if you are interested.
          </div>
          <div className="primary-content">
            <b>Other positions: </b>
            I am always actively looking for interns and developers. If you are interested
            in doing internship or other positions such as developers, please also do not hesitate
            to email Titipat to discuss.
          </div>
          <div className="primary-content">
            <b>Office: </b>
            Mahidol University,
            Engineering Building 3, 3rd Floor
            999 Phutthamonthon 4 Road,
            Salaya, Nakhon Pathom, Thailand 73170
          </div>
        </div>
        <div>
          <form className="form-container" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post">
            <div>
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="w3lName" id="w3lName"/>
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender"/>
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input type="text" name="w3lSubject" id="w3lSubject"/>
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea name="w3lMessage" id="w3lMessage"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`