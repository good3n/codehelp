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
    <Resource
      name="React Joyride"
      desc="Create awesome tours for your app! Showcase your app to new users or explain functionality of new features."
      link="https://github.com/gilbarbara/react-joyride"
    />
    <Resource
      name="React Query"
      desc="Fetch, cache and update data in your React and React Native applications all without touching any 'global state'."
      link="https://react-query.tanstack.com/"
    />
  </div>
)

export default ReactJs
