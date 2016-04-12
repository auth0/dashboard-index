
import React, { Component } from 'react'
import Sidebar from '../Sidebar'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <section className="content-page current" data-route="/" data-title="Dashboard" id="dashboard">
        <div className="col-xs-10 wrapper">
          <div className="row">
            <div className="col-xs-12 content-header">
              <h1 className="pull-left">Sample Section</h1>
            </div>
          </div>
          <div className="widget-title title-with-nav-bars">
            <ul className="nav nav-tabs">
              <li className="active">
                <a aria-expanded="true" className="script-button" data-toggle="tab" href="#"><span className="tab-title">Sub Section</span></a>
              </li>
              <li>
                <a className="script-button" data-toggle="tab" href="#"><span className="tab-title">Sub Section</span></a>
              </li>
              <li>
                <a className="script-button" data-toggle="tab" href="#"><span className="tab-title">Sub Section</span></a>
              </li>
              <li>
                <a className="script-button" data-toggle="tab" href="#"><span className="tab-title">Sub Section</span></a>
              </li>
            </ul>
          </div>
          <div id="sample-content">
            Content goes here.
          </div>
        </div>
      </section>
    )
  }
}

export default MainSection
