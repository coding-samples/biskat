import React from 'react'
import { connect } from 'react-redux'

import catalogActions from './catalog-actions'
import { catalogShowSelector } from './catalog-selectors'
import { map, prop, sum } from "ramda"


class ShowView extends React.Component {

  componentWillMount() {
    this.props.setBusinessId(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.setBusinessId(this.props.match.params.id)
    }
  }

  renderRating(reviews) {
    if (reviews == null) {
      return 'loading...'
    } else if (reviews && reviews.length > 0) {
      const rating = sum(map(prop('score'), reviews)) / 5.0
      return <span>{rating} / 5.0</span>
    } else {
      return <span>NO REVIEWS</span>
    }
  }

  render() {
    const business = this.props.business

    return (
      <div>
        <div className="row">
          <h2 className="col-lg-6">Review</h2>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid w-100"
                 src={business.imageUrl}
                 alt={business.name}
            />
          </div>
          <div className="col-sm-6">
            <h3>{business.name}</h3>
            <p>{business.city}, {business.country}</p>
            <p>{business.description}</p>
            <p>Rating: {this.renderRating(business.reviews)}</p>
            <p>Category: {business.category}</p>
            <a href={business.href} className="btn btn-success btn btn-primary btn-lg btn-block">
              Submit
            </a>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(catalogShowSelector, catalogActions.show)(ShowView)
