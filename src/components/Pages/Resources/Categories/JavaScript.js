import React from 'react'
import { Resource } from '../Resource'

const JavaScript = () => (
  <div id="javascript">
    <h3>
      <span>#</span>JavaScript
    </h3>
    <Resource
      name="A Quick Tour of ES6 (Or, The Bits You'll Actually Use)"
      desc="ES6 has been getting a lot of press lately. And with all of the benefits that the new syntax and built-ins bring, it damn well should."
      link="http://jamesknelson.com/es6-the-bits-youll-actually-use/"
    />
    <Resource
      name="ES6 Overview in 350 Bullet Points"
      desc="I heard you like bullet points, so I made an article containing hundreds of those bad boys."
      link="https://ponyfoo.com/articles/es6"
    />
    <Resource
      name="JavaScript30"
      desc="Build 30 things with vanilla JS in 30 days with 30 tutorials."
      link="https://javascript30.com/"
    />
  </div>
)

export default JavaScript
