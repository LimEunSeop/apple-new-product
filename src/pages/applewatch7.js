import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'

import image1 from '../assets/images/apple watch 7/1.png'
import image2 from '../assets/images/apple watch 7/2.png'
import image3 from '../assets/images/apple watch 7/3.png'
import videoSrc from '../assets/videos/apple watch 7.mp4'
import Video from '../components/Video'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const applewatch7 = () => {
  return (
    <Layout pageTitle="Apple Watch 7">
      <Wrapper>
        <Video
          isBlur={true}
          src={videoSrc}
          style={{ width: '100%', height: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '30px',
            left: '7%',
            width: '20%',
          }}
          className="border-animation"
        >
          <img
            src={image1}
            alt=""
            style={{
              width: '100%',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '87px',
            right: '0',
            width: '20%',
          }}
          className="border-animation"
        >
          <img
            src={image2}
            alt=""
            style={{
              width: '100%',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: ' 25%',
            width: '50%',
          }}
          className="border-animation"
        >
          <img
            src={image3}
            alt=""
            style={{
              width: '100%',
            }}
          />
        </div>
      </Wrapper>
    </Layout>
  )
}

export default applewatch7
