import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'

import image1 from '../assets/images/ipad mini 5/1.png'
import videoSrc from '../assets/videos/ipad mini 5.mp4'
import Video from '../components/Video'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ipadmini5 = () => {
  return (
    <Layout pageTitle="iPad Mini 5">
      <Wrapper>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '99',
            width: '28%',
            borderRadius: '5%',
            overflow: 'hidden',
          }}
        >
          <Video
            src={videoSrc}
            style={{
              paddingTop: '148%',
              overflow: 'hidden',
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '60%',
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
      </Wrapper>
    </Layout>
  )
}

export default ipadmini5
