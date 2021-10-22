import React, { useEffect, useState } from 'react'
import '../../styles/index.scss'
import { useStaticQuery, graphql, Link, navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import Logo from '../../assets/images/logo.svg'
import * as styles from './Layout.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHashtag,
  faPlay,
  faHeart,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const Layout = ({ pageTitle, children, showNav }) => {
  const [navOpened, setNavOpened] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleNavOpen = (e) => {
    setNavOpened(true)
  }

  const handleNavClose = () => {
    setNavOpened(false)
  }

  const handleNavLinkClick = (e) => {
    e.preventDefault()
    const to = e.currentTarget.getAttribute('href')
    setNavOpened(false)

    const main = document.querySelector(`.${styles.main}`)
    main.classList.add(styles.fadeout)
    window.setTimeout(() => {
      navigate(to)
      main.classList.remove(styles.fadeout)
    }, 1600)
  }

  useEffect(() => {
    const borderAnimationContainers =
      document.querySelectorAll('.border-animation')
    borderAnimationContainers.forEach((container) => {
      container.classList.add('animate')
    })
    window.setTimeout(() => {
      borderAnimationContainers.forEach((container) => {
        const img = container.querySelector('img')
        img.classList.add('animate')
      })
    }, 2000)
    window.setTimeout(() => {
      borderAnimationContainers.forEach((container) => {
        container.classList.remove('animate')
      })
    }, 2800)
  }, [children])

  return (
    <>
      <Helmet>
        <title>{pageTitle || data.site.siteMetadata.title}</title>
      </Helmet>
      <div className={cx('wrapper', navOpened && 'navOpened')}>
        {showNav && (
          <nav className={cx('nav')}>
            <button className={styles.navCloseButton} onClick={handleNavClose}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className={styles.navInner}>
              <h1>
                <Link to="/" aria-label="Logo" className={styles.logo}>
                  <Logo width="100" />
                </Link>
              </h1>
              <ul className={styles.navItem}>
                <li>
                  <Link to="/iphone13pro/" onClick={handleNavLinkClick}>
                    iPhone 13 Pro
                  </Link>
                </li>
                <li>
                  <Link to="/iphone13/" onClick={handleNavLinkClick}>
                    iPhone 13
                  </Link>
                </li>
                <li>
                  <Link to="/ipadmini5/" onClick={handleNavLinkClick}>
                    iPad Mini 5
                  </Link>
                </li>
                <li>
                  <Link to="/applewatch7/" onClick={handleNavLinkClick}>
                    Apple Watch 7
                  </Link>
                </li>
              </ul>
              <div className={styles.etcLinks}>
                <a href="#">
                  <FontAwesomeIcon icon={faHashtag} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faPlay} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} />
                </a>
              </div>
            </div>
          </nav>
        )}
        <main className={styles.main}>
          {showNav && (
            <button
              type="button"
              aria-label={navOpened ? '네비게이션 닫기' : '네비게이션 열기'}
              className={styles.navOpenButton}
              onClick={handleNavOpen}
            >
              <div className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Logo width="100" />
            </button>
          )}

          {children}
        </main>
      </div>
    </>
  )
}

Layout.defaultProps = {
  showNav: true,
}

export default Layout
