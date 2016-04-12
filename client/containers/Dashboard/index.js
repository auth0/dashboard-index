
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import MainSection from '../../components/MainSection'
import * as TodoActions from '../../actions/todos'
import style from './style.css'

class Dashboard extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <span>
        <Header addTodo={actions.addTodo} />
        <div className="container">
          <div className="row">
            <Sidebar currentRoute={"/"} />
            <MainSection todos={todos} actions={actions} />
          </div>
        </div>
      </span>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
