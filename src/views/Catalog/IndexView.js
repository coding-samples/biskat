import React from 'react'
import { connect } from 'react-redux'
import qs from 'query-string'
import catalogActions from "./catalog-actions"
import { catalogIndexSelector } from "./catalog-selectors"

import BusinessCard from "../../components/Business/BusinessCard"

class IndexView extends React.Component {

  componentWillMount() {
    this.props.start(qs.parse(this.props.location.search))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.props.applyFilter(qs.parse(nextProps.location.search))
    }
  }

  render() {
    return (
      <div className="catalog">

        <div className="row">
          <h2 className="col-lg-6">Select you business</h2>

          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-4">
                <div className="form-group row">
                  <label className="form-label col-4 col-form-label text-sm-right text-left w-sm-100">Sort:</label>
                  <div className="col-8">
                    <select className="form-control"
                            value={this.props.filter.sort}
                            onChange={(e) => this.props.setLocationFilter({name: 'sort', value: e.target.value})}>
                      <option key={''} value={''}>-- NO --</option>
                      <option key={'asc'} value={'asc'}>A-Z</option>
                      <option key={'desc'} value={'desc'}>Z-A</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-8" >
                <div className="form-group row">
                  <label className="form-label col-4 col-form-label text-sm-right text-left">Category:</label>
                  <div className="col-8">
                    <select className="form-control"
                            value={this.props.filter.category}
                            onChange={(e) => this.props.setLocationFilter({name: 'category', value: e.target.value})}>
                      <option key={''} value={''}>-- ALL CATEGORIES --</option>
                      {this.props.categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {this.props.businesses.map((business) => {
            return (<div key={business.id} className="col-md-6" style={{paddingBottom: '20px'}}>
              <BusinessCard business={business}/>
            </div>)
          })}
        </div>

      </div>
    )
  }
}

export default connect(catalogIndexSelector, catalogActions.index)(IndexView)
