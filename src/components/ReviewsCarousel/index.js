// Write your code here
import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {index: 0}

  prevReview = () => {
    this.setState(pState => ({
      index: pState.index !== 0 ? pState.index - 1 : pState.index,
    }))
  }

  nextReview = () => {
    const {reviewsList} = this.props
    this.setState(pState => ({
      index:
        pState.index !== reviewsList.length - 1
          ? pState.index + 1
          : pState.index,
    }))
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const details = reviewsList[index]
    const {imgUrl, username, companyName, description} = details

    return (
      <div className="mainBg">
        <h1>Reviews</h1>
        <img className="img" src={imgUrl} alt={username} />
        <div className="arrows">
          <button
            onClick={this.prevReview}
            type="button"
            data-testid="leftArrow"
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="btnImg"
            />
          </button>

          <p>{username}</p>

          <button
            onClick={this.nextReview}
            type="button"
            data-testid="rightArrow"
            className="btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="btnImg"
            />
          </button>
        </div>
        <p className="info">{companyName}</p>
        <p className="info">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
