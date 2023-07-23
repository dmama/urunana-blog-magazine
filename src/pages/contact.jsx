import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us | Urunana"
        description="Contactez-nous pour toute demande de renseignements ou découvrez comment vous pouvez contribuer à notre mission!"
      />
      <ContactForm />
    </Layout>
  )
}

export default contact
