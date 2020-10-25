import React from 'react'
import StickyBox from 'react-sticky-box'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { Sidebar, Heading } from './ResourcesSidebar.styles'

const ResourcesSidebar = () => (
  <Sidebar>
    <StickyBox offsetTop={50} offsetBottom={50}>
      <Heading>General Guides &amp; Information</Heading>
      <li>
        <AnchorLink to="/resources#webdev" title="Web Development">
          Web Development
        </AnchorLink>
      </li>
      <Heading>Languages &amp; Markup</Heading>
      <li>
        <AnchorLink to="/resources#html" title="HTML/SVG">
          HTML/SVG
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/resources#css" title="CSS">
          CSS
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/resources#javascript" title="Javascript">
          Javascript
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/resources#php" title="PHP">
          PHP
        </AnchorLink>
      </li>
      <Heading>Libraries &amp; Frameworks</Heading>
      <li>
        <AnchorLink to="/resources#reactjs" title="React">
          React
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/resources#vuejs" title="Vue.js">
          Vue.js
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/resources#wordpress" title="WordPress">
          WordPress
        </AnchorLink>
      </li>
      <Heading>Other</Heading>
      <li>
        <AnchorLink to="/resources#design" title="Design">
          Design
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/resources#youtube" title="YouTube">
          YouTube
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to="/resources#podcasts" title="Podcasts">
          Podcasts
        </AnchorLink>
      </li>
    </StickyBox>
  </Sidebar>
)

export default ResourcesSidebar
