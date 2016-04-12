
import React, { Component } from 'react'
import TodoItem from '../TodoItem'
import Footer from '../Footer'
import Sidebar from '../Sidebar'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/filters'
import style from './style.css'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  handleClearCompleted() {
    const atLeastOneCompleted = this.props.todos.some(todo => todo.completed)
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted()
    }
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return <input
        className={style.toggleAll}
        type="checkbox"
        checked={completedCount === todos.length}
        onChange={actions.completeAll} />
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={::this.handleClearCompleted}
          onShow={::this.handleShow} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) => {
      return todo.completed ? count + 1 : count
    }, 0)

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
