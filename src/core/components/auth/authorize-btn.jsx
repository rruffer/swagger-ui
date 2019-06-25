import React from "react"
import PropTypes from "prop-types"

export default class AuthorizeBtn extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    isAuthorized: PropTypes.bool,
    showPopup: PropTypes.bool,
    getComponent: PropTypes.func.isRequired
  }

  render() {
    let { isAuthorized, showPopup, onClick, getComponent } = this.props

    //must be moved out of button component
    const AuthorizationPopup = getComponent("authorizationPopup", true)

    return (
      <div className="auth-wrapper">
        <button className={isAuthorized ? "btn authorize unlocked" : "btn authorize locked"} onClick={onClick}>
          <span>{isAuthorized ? "Autorizado":"Autorizar"}</span>
          <svg width="20" height="20">
            <use href={ isAuthorized ? "#unlocked" : "#locked" } xlinkHref={ isAuthorized ? "#unlocked" : "#locked" } />
          </svg>
        </button>
      { showPopup && <AuthorizationPopup /> }
      </div>
    )
  }
}
