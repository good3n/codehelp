import React from 'react'
import { Resource } from '../Resource'

const WebsitesBlogs = () => (
  <div id="websites-blogs">
    <h3>
      <span>#</span>Websites &amp; Blogs
    </h3>
    <Resource
      name="dev.to"
      desc="A community of software developers getting together to help one another out."
      link="https://dev.to/"
    />
    <Resource
      name="ui.dev"
      desc="Master the JavaScript Ecosystem"
      link="https://ui.dev/"
    />
  </div>
)

export default WebsitesBlogs
