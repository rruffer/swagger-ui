import React from "react"
import PropTypes from "prop-types"

export default class VersionPragmaFilter extends React.PureComponent {
  static propTypes = {
    isSwagger2: PropTypes.bool.isRequired,
    isOAS3: PropTypes.bool.isRequired,
    bypass: PropTypes.bool,
    alsoShow: PropTypes.element,
    children: PropTypes.any,
  }

  static defaultProps = {
    alsoShow: null,
    children: null,
    bypass: false,
  }

  render() {
    const { bypass, isSwagger2, isOAS3, alsoShow } = this.props

    if(bypass) {
      return <div>{ this.props.children }</div>
    }

    if(isSwagger2 && isOAS3) {
      return <div className="version-pragma">
        {alsoShow}
        <div className="version-pragma__message version-pragma__message--ambiguous">
          <div>
            <h3>Não é possível renderizar esta definição</h3>
            <p><code>swagger</code> e <code>openapi</code> campos não podem estar presentes na mesma definição de Swagger ou OpenAPI. Por favor, remova um dos campos.</p>
            <p>Os campos da versão suportados são <code>swagger: {"\"2.0\""}</code> e aqueles que correspondem <code>openapi: 3.0.n</code> (por exemplo, <code>openapi: 3.0.0</code>).</p>
          </div>
        </div>
      </div>
    }

    if(!isSwagger2 && !isOAS3) {
      return <div className="version-pragma">
        {alsoShow}
        <div className="version-pragma__message version-pragma__message--missing">
          <div>
            <h3>Não é possível renderizar esta definição</h3>
            <p>A definição fornecida não especifica um campo de versão válido.</p>
            <p>Por favor, indique um campo de versão Swagger ou OpenAPI válido. Os campos da versão suportados são <code>swagger: {"\"2.0\""}</code> e aqueles que correspondem<code>openapi: 3.0.n</code> (por exemplo, <code>openapi: 3.0.0</code>).</p>
          </div>
        </div>
      </div>
    }

    return <div>{ this.props.children }</div>
  }
}
