import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'

import image1 from '../assets/images/Iphone 13/1.png'
import image2 from '../assets/images/Iphone 13/2.png'
import image3 from '../assets/images/Iphone 13/3.png'
import videoSrc from '../assets/videos/iphone 13.mp4'
import Video from '../components/Video'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const iphone13 = () => {
  return (
    <Layout pageTitle="iPhone 13">
      <Wrapper>
        <Video
          isBlur={true}
          src={videoSrc}
          style={{ width: '100%', height: '100%' }}
        />
        <div
          style={{ position: 'absolute', top: '0', left: '0', width: '20%' }}
          className="border-animation"
        >
          <img src={image1} alt="" style={{ width: '100%' }} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
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
            right: '0',
            bottom: '10px',
            width: '70%',
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

export default iphone13
