import React from "react"
import PropTypes from "prop-types"

export default class AuthorizeOperationBtn extends React.Component {
    static propTypes = {
      isAuthorized: PropTypes.bool.isRequired,
      onClick: PropTypes.func
    }

  onClick =(e) => {
    e.stopPropagation()
    let { onClick } = this.props

    if(onClick) {
      onClick()
    }
  }

  render() {
    let { isAuthorized } = this.props

    return (
      <button className={isAuthorized ? "authorization__btn unlocked" : "authorization__btn locked"}
        aria-label={isAuthorized ? "authorization button unlocked" : "authorization button locked"}
        onClick={this.onClick}>
        <svg width="20" height="20">
          <use href={ isAuthorized ? "#unlocked" : "#locked" } xlinkHref={ isAuthorized ? "#unlocked" : "#locked" } />
        </svg>
      </button>

    )
  }
}
