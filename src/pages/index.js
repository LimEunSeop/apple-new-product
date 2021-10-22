import * as React from 'react'
import coverVideo from '../assets/videos/cover.mp4'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'
import classnames from 'classnames/bind'

const CenterVideoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  overflow: hidden;

  &:hover {
    a {
      opacity: 1;
    }
  }
`

const EnterLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 40px;
  transition: all 0.6s;
  color: white;
  opacity: 0;
  padding: 10px 0;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
    color: black;
  }
`

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="New Apple Products" showNav={false}>
      <h1 className="a11y-hidden">New Apple Products</h1>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}
      >
        <video
          src={coverVideo}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.7,
          }}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <CenterVideoWrapper>
        <video
          src={coverVideo}
          style={{
            width: '85vw',
            height: '80vh',
            objectFit: 'cover',
          }}
          autoPlay
          loop
          muted
        ></video>
        <EnterLink to="/iphone13pro">EXPLORE NEW APPLE PRODUCTS</EnterLink>
      </CenterVideoWrapper>
    </Layout>
  )
}

export default IndexPage
