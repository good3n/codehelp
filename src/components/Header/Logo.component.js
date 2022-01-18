import React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import useWindowSize from '../../hooks/useWindowSize'

const Logo = ({ navOpen }) => {
  const { width } = useWindowSize()
  return (
    <>
      {navOpen && width < 992 ? (
        <svg
          style={{ height: `30px` }}
          viewBox="0 0 423 177"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none">
            <path
              d="M91.5 112c0-35.75 22.75-65 60.5-65 26.25 0 44.25 11.5 54.5 34.75L180 93c-6.25-14.75-15-19.5-28-19.5-17.75 0-29.5 14.25-29.5 38.5s11.75 38.5 29.5 38.5c13 0 21.75-4.75 28-19.5l26.5 11.25C196.25 165.5 178.25 177 152 177c-37.75 0-60.5-29.25-60.5-65z"
              fill="#202225"
            />
            <path
              d="M217.75 177V0h31v71.25a46.74 46.74 0 0 1 40-22.25C313 49 328 62 328 87v90h-31V98c0-15.25-6-22.5-18.75-22.5-15 0-29.5 15.75-29.5 48.25V177h-31z"
              fill="#202225"
            />
            <path
              d="m71 169.25-71-50.5v-14.5l71-50.5h1.5v29.5l-42 28.25 42 28.25v29.5zm280.25 0h-1.75v-29.5l42.25-28.25-42.25-28.25v-29.5h1.75l71 50.5v14.5z"
              fill="#202225"
            />
          </g>
        </svg>
      ) : (
        <StaticImage
          alt="CodeHelp.io"
          height={30}
          placeholder="tracedSVG"
          src="../../assets/images/ch-logo-light.png"
        />
      )}
    </>
  )
}

Logo.propTypes = {
  navOpen: PropTypes.bool,
}

export default Logo
