import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import cursor from '../assets/images/cursor.png'

const Video = ({ isBlur, src, ...props }) => {
  const [opacity, setOpacity] = useState(0)
  const [modalOpened, setModalOpened] = useState(false)

  useEffect(() => {
    window.setTimeout(() => {
      setOpacity(isBlur ? '0.3' : '1')
    }, 2000)
  }, [])

  const handleVideoClick = () => setModalOpened(true)

  return (
    <>
      <div {...props}>
        <video
          src={src}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'all 0.8s',
            opacity: opacity,
            cursor: `url(${cursor}), auto`,
          }}
          autoPlay
          loop
          muted
          onClick={handleVideoClick}
        ></video>
      </div>
      {modalOpened && (
        <ReactModal
          isOpen={modalOpened}
          onRequestClose={() => setModalOpened(false)}
          style={{
            overlay: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
            content: {
              width: '80vw',
              padding: '0',
              inset: 'initial',
            },
          }}
        >
          {/* <div id="video-box"> */}
          <video src={src} style={{ width: '100%' }} autoPlay loop></video>
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              position: 'absolute',
              right: '20px',
              top: '15px',
              fontSize: '40px',
              color: '#fff',
              cursor: 'pointer',
            }}
            onClick={() => setModalOpened(false)}
          />
          {/* </div> */}
        </ReactModal>
      )}
    </>
  )
}

Video.defaultProps = {
  isBlur: false,
}

export default Video
