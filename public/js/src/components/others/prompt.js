import React from 'react'
import { FadeIn } from 'animate-components'
import PropTypes from 'prop-types'
import $ from 'jquery'

export default class Prompt extends React.Component {

  componentDidMount = () => {
    $('.prompt-done').focus()
    $('.header').css({
      zIndex: this.props.title == 'Delete message' ? '0' : '2'
    })
  }

  componentWillUnmount = () =>
    $('.header').css({ zIndex: '2' })

  close = e => {
    e.preventDefault()
    this.props.back()
  }

  render() {
    let { title, content, actionText, action, blurred } = this.props

    return (
      <div className='prompt'>
        <FadeIn duration='300ms'>

          <div className='prompt-top'>
            <span className='prompt-title'>{title}</span>
            <span onClick={this.close} >
              <i className='material-icons'>clear</i>
            </span>
          </div>

          <div className='prompt-middle' style={{ marginBottom: blurred ? 9 : 10 }} >
            <span className='prompt-content'>{content}</span>
          </div>

          <div className='prompt-bottom'>
            <a href='#' className='sec_btn prompt-cancel' onClick={this.close} >Cancel</a>
            <a href='#' className='pri_btn prompt-done' onClick={action} >{actionText}</a>
          </div>

        </FadeIn>

      </div>
    )
  }
}

Prompt.defaultProps = {
  title: 'Title',
  content: 'Main content goes here',
  actionText: 'Action',
  action: () => { return },
  back: () => { return },
  blurred: false // chrome blures it, if blurred, set it true to remove it
}

Prompt.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  blurred: PropTypes.bool
}
