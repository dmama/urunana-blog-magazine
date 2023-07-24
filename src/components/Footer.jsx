import React from 'react'
import SocialLinks from '../constants/socialLinks'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import logoNyon from '../../static/documents/logo-ville-nyon.svg'
import { Link } from 'gatsby'
import {StaticImage} from "gatsby-plugin-image";
const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">

          <StaticImage
              src='../../static/documents/logo-ville-nyon.svg'
              layout="constrained"
              width={200}
              height={200}
              alt="Ville de Nyon"
              className="partner-img"
              placeholder="blurred"
          />

        <div className="footer-links">
         <div>
            <Link className="footer-link" to="https://www.nyon.ch/">
                Ville de Nyon
            </Link>
          </div>

        </div>

        <p className="footer-copyright">
          &copy;Mai-2023-{new Date().getFullYear()}  MAIN PARTNERS.
        </p>
      </div>
    </FooterStyles>
  )
}

export const FooterStyles = styled.footer`
  /*
===============
Footer
===============
*/
  .footer {
    /* height: 7rem; */
    text-align: center;
    background: var(--black);
    display: grid;
    place-items: center;
    padding: 1rem 0;
    display: block;
  }
  .footer-icons {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-bottom: 1.5rem;
  }
  .footer-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: var(--transition);
  }
  .footer-icons li {
    transition: var(--transition);
  }
  .footer-icons li:hover {
    transform: translateY(-10%);
  }
  .footer p {
    margin-bottom: 0;
    color: var(--white);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }

  .footer-logo {
    margin: 1rem 0 1.5rem 0;
    width: 3rem;
    height: 3rem;
  }

  .footer-copyright {
    margin: 0.8rem 0 1.2rem 0;
  }

  .footer-links {
    margin: 1rem 0 0.7rem 0;
    line-height: 1.5rem;
  }

  .footer-link {
    color: var(--white);
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 767px) {
    .footer-links {
      line-height: 2rem;
    }

    .footer {
      padding: 1rem;
    }
  }
`

export default Footer
