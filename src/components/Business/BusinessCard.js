import React from 'react'
import { Link } from "react-router-dom"

import './BusinessCard.css'

const BusinessCard = ({business}) => (
  <div className="business-card card">
    <div className="row">
      <div className="col-lg-4 col-sm-12">
        <img className="business-card__image w-100" alt={business.name} src={business.imageUrl}/>
      </div>
      <div className="business-card__text col-lg-8 col-sm-12">
        <div className="card-body">
          <h2 className="card-title">{business.name}</h2>
          <div className="card-text">
            <small className="text-muted">{business.city}, {business.country}</small>
          </div>
          <div className="card-text">{business.description}</div>
        </div>
      </div>
    </div>
    <div className="business-card__footer card-footer bg-transparent">
      <Link className="btn btn-primary btn-lg btn-block"
            to={`details/${business.id}`}>
        Continue
      </Link>
    </div>
  </div>
)

export default BusinessCard