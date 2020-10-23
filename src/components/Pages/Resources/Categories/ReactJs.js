import React from 'react'
import { Resource } from '../Resource'

const ReactJs = () => (
  <div id="reactjs">
    <h3>
      <span>#</span>ReactJS
    </h3>
    <Resource
      name="Gatsby"
      desc="Gatsby is a React-based open source framework for creating websites and apps."
      link="https://www.gatsbyjs.com/"
    />
    <Resource
      name="Next.js"
      desc="Next.js gives you the best developer experience with all the features you need for production: hybrid static &amp; server rendering, TypeScript support, smart bundling, route pre-fetching, and more."
      link="https://nextjs.org/"
    />
    <Resource
      name="React Sticky Box"
      desc="Sticky Boxes with sensible behaviour if the content is bigger than the viewport."
      link="https://react-sticky-box.codecks.io/"
    />
  </div>
)

export default ReactJs
