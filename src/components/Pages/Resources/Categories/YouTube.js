import React from 'react'
import { Resource } from '../Resource'

const YouTube = () => (
  <div id="youtube">
    <h3>
      <span>#</span>YouTube
    </h3>
    <Resource
      name="freeCodeCamp"
      desc="Learn to code for free."
      link="https://www.youtube.com/c/Freecodecamp/"
    />
    <Resource
      name="Traversy Media"
      desc="Traversy Media features web development and programming tutorials for web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and more."
      link="https://www.youtube.com/user/TechGuyWeb"
    />
  </div>
)

export default YouTube
