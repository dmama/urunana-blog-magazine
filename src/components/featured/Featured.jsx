import React from 'react'
import styled from 'styled-components'
import './features-styles.scss'
import {StaticImage} from "gatsby-plugin-image";

const Featured = () => {
  return (
    <FeaturedStyles>
      <div className="featured-section container">
        <div className="row">
{/*          <Top />
          <Trending />
          <Popular />*/}
            <StaticImage
                class="support-heart"
                src="../assets/heart.png"
                alt="Open Source Illustration"
                layout="constrained"
                placeholder="blurred"
                width='19'
                height='19'
            />

        </div>
      </div>
    </FeaturedStyles>
  )
}

export const FeaturedStyles = styled.section`
border-bottom: 1px solid var(--primary-1);

  .featured-section {
    padding: 5rem 0;
  }

  @media screen and (max-width: 767px) {
    .featured-section{
      padding: 0 0 5rem 0;
    }
  }

  @media screen and (max-width: 576px) {
    .featured-section{
      padding: 0 15px 0 15px;
    }
  }
`

export default Featured
