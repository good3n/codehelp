import React from 'react'
import { Resource } from '../Resource'

const Css = () => (
  <div id="css">
    <h3>
      <span>#</span>CSS
    </h3>
    <Resource
      name="Sass"
      desc="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world."
      link="https://sass-lang.com/"
    />
    <Resource
      name="Tailwind CSS"
      desc="Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."
      link="https://tailwindcss.com/"
    />
  </div>
)

export default Css
