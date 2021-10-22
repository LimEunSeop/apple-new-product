import React from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import image1 from '../assets/images/iphone 13 pro/1.png'
import image2 from '../assets/images/iphone 13 pro/2.png'
import image3 from '../assets/images/iphone 13 pro/3.png'
import image4 from '../assets/images/iphone 13 pro/4.png'
import videoSrc from '../assets/videos/iphone 13 pro.mp4'
import Video from '../components/Video'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const iphone13pro = () => {
  return (
    <Layout pageTitle="iPhone 13 Pro">
      <Wrapper>
        <Video
          isBlur={true}
          src={videoSrc}
          style={{ width: '100%', height: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            left: '8%',
            bottom: '0',
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
            top: '10px',
            right: '0',
            width: '60%',
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
            bottom: '10px',
            right: '0',
            width: '60%',
          }}
          className="border-animation"
        >
          <img src={image4} alt="" style={{ width: '100%' }} />
        </div>
        {/* <img
          src={image3}
          alt=""
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
          }}
        /> */}
      </Wrapper>
    </Layout>
  )
}

export default iphone13pro
