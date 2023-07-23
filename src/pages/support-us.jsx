import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import styled from 'styled-components'
import Bmc from '../assets/bmc-logo-no-background.png'
import Github from '../assets/github.png'
import SocialMedia from '../assets/social-media.png'
import BulletinSouscription from '../../static/documents/souscription-bulletin.pdf'
import listePrixSponsors from '../../static/documents/Liste-prix-2023-sponsors.pdf'

const Support = () => {
  return (
    <Layout>
      <Wrapper>
        <Seo
          title="Soutenez-nous | Urunana"
          description="Il existe plusieurs façons de soutenir Urunana"
        />
        <div className="container support-container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title categories-title">Soutenez-nous</h1>
          
              <p>
                Assurer aux jeunes une connaissance de leur culture d’origine par la sauvegarde
                de la langue, de la danse et des tambours.
                Promouvoir les multiples facettes de la culture rwandaise à travers l’Europe.
                Nous faire connaître et reconnaître dans nos milieux de vie avec nos sensibilités
                et notre culture.

                Venir en aide à tout jeune, toute personne ou toute famille par l’écoute, le dialogue
                et le respect constant de leur personnalité.
              </p>
              <p>Vous pouvez nous soutenir de plusieurs manières:</p>

              {/* Item */}
              <div className="support-item">
                <div>
                    <img
                      src={Bmc}
                      alt="buy me a coffee logo"
                      className="support-img"
                    />

                </div>
                <div>
                  <h2 className="support-title">Achetez nous les différents objets d'arts qui seront mis en vente.</h2>
                  <p>
                    Soutenez l'association Urunana. Plusieurs objets d'art seront disponible à la vente,
                    vos dons vont au maintien des prestations  {' '}
                    <a
                      href="https://urunana.com/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Urunana
                    </a>
                    .
                  </p>

                </div>
              </div>

              <div className="support-item">
                <div>
                  <img
                    src={SocialMedia}
                    alt="various social media icons"
                    className="support-img"
                  />
                </div>
                <div>
                  <h2 className="support-title">Demandes de sponsoring</h2>
                  <p>
                    Venez nous soutenir durablement par votre contribution financière
                  </p>

                  <a href={BulletinSouscription} title="Télécharger le bulletin de souscription"  target="_blank">
                    Bulletin de souscription.
                  </a>
                  <br/>
                  <a href={listePrixSponsors} title="Télécharger la liste des prix de de sponsoring "  target="_blank">
                    La liste des Prix de sponsoring.
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="blockquote-wrapper">
          <div className="blockquote">
            <h3>
              Revista will remain free forever. Thank you to all of our
              supporters and maintainers!
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              Best of all, Revista is completely open source! Anyone can
              contribute, or if you have grander ideas, clone our project and
              create your own dream project. Let's build off of each other to
              create amazing, meaningful online services.
            </h3>
            <h4>
              &mdash; <strong>Chris Morrison</strong>
              <br aria-hidden="true" />
              <em>
                Creator of Revista &amp; owner of <br aria-hidden="true" />
                <a
                  href="https://mesmerdesign.ca"
                  className="support-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mesmer Design
                </a>
              </em>
            </h4>
          </div>
        </div>*/}
      </Wrapper>{' '}
    </Layout>
  )
}

const Wrapper = styled.section`
  .section-title {
    font-size: 180%;
  }

  .support-container {
    margin: 5rem auto;
  }

  .support-title {
    font-size: 18px;
  }

  .support-item {
    margin: 3rem auto;
    display: flex;
    align-items: center;

    p {
      margin-bottom: 0.5rem;
    }
  }

  .support-link {
    color: var(--primary-7);
    font-size: 110%;
    font-weight: 500;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: var(--primary-8);
    }
  }

  .support-img {
    width: 3rem;
    height: auto;
    margin-right: 3rem;
    display: block;
  }

  /* increase header size after 600px */
  @media all and (max-width: 600px) {
    .blockquote-wrapper,
    .section-title {
      text-align: left;
    }

    .support-item {
      flex-direction: column;
      text-align: center;
    }

    .support-img {
      margin: 0 0 0.8rem 0;
    }
  }

  /* center the blockquote in the page */
  .blockquote-wrapper {
    display: flex;
    padding: 0 20px;
    background-color: #292a2b;
  }

  /* Blockquote main style */
  .blockquote {
    position: relative;
    font-family: 'Barlow Condensed', sans-serif;
    max-width: 620px;
    margin: 80px auto;
    align-self: center;
  }

  .blockquote,
  h3,
  h4 {
    text-transform: none !important;
  }

  /* Blockquote header */
  .blockquote h3 {
    font-family: 'Montserrat', sans-serif;
    position: relative; /* for pseudos */
    color: var(--primary-6);
    font-size: 1rem;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    border: 2px solid #fff;
    border: solid 2px;
    border-radius: 20px;
    padding: 25px;
  }

  /* Blockquote right double quotes */
  .blockquote h3:after {
    content: '';
    position: absolute;
    border: 2px solid var(--primary-6);
    border-radius: 0 50px 0 0;
    width: 60px;
    height: 60px;
    bottom: -60px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }

  .blockquote h3:before {
    content: '';
    position: absolute;
    width: 80px;
    border: 6px solid #292a2b;
    bottom: -3px;
    left: 50px;
    z-index: 2;
  }

  /* increase header size after 600px */
  @media all and (min-width: 600px) {
    .blockquote h3 {
      font-size: 1.4rem;
      line-height: 1.2;
    }
  }

  /* Blockquote subheader */
  .blockquote h4 {
    position: relative;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    padding-top: 15px;
    z-index: 1;
    margin-left: 150px;
    padding-left: 12px;
  }

  .blockquote h4:first-letter {
    margin-left: -12px;
  }

  @media screen and (max-width: 800px) {
    .support-link {
      color: var(--primary-7);
      font-size: 140%;
      font-weight: 500;
      transition: color 0.1s ease-in-out;
    }
  }
`

export default Support
