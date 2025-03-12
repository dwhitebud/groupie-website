import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import HowItWorks from "../components/how-it-works"
import Benefits from "../components/benefits"
import Testimonials from "../components/testimonials"
import FAQ from "../components/faq"
import ContactForm from "../components/contact-form"

const IndexPage = () => (
  <Layout>
    <Hero />
    <HowItWorks />
    <Benefits />
    <Testimonials />
    <FAQ />
    <ContactForm />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Host Your Own Dream Trip" />

export default IndexPage
