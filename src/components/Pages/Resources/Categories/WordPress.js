import React from 'react'
import { Resource } from '../Resource'

const WordPress = () => (
  <div id="wordpress">
    <h3>
      <span>#</span>WordPress
    </h3>
    <Resource
      name="Advanced Custom Fields"
      desc="Use the Advanced Custom Fields plugin to take full control of your WordPress edit screens &amp; custom field data."
      link="https://www.advancedcustomfields.com/"
    />
    <Resource
      name="Underscores"
      desc="Underscores is a starter theme designed to cut down many hours of development time when setting up a new custom theme."
      link="https://underscores.me/"
    />
    <Resource
      name="Wordmove"
      desc="Wordmove is a command line tool that lets you automatically mirror local WordPress installations and DB data back and forth from your local development machine to one or more remote servers."
      link="https://github.com/welaika/wordmove"
    />
  </div>
)

export default WordPress
