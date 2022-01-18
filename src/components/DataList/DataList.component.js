import React from 'react'
import PropTypes from 'prop-types'
import { Resource } from '../Resource'

const DataList = ({ data }) => {
  return (
    <div>
      {data.map(({ label: { id, name, categories } }) => (
        <div className="label" key={id}>
          <h2>{name}</h2>
          {categories.map(({ category }) => (
            <div id={category.id} key={category.id}>
              <h3>
                <span>#</span>
                {category.name}
              </h3>
              {category.resources.map(resource => (
                <div key={resource.id}>
                  <Resource
                    desc={resource.description}
                    id={resource.id}
                    link={resource.link}
                    name={resource.name}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

DataList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default DataList
