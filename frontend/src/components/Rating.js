import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import PropTypes from 'prop-types'

const Rating = ({ value, text, starColor }) => {
    return (
        <div className="rating">
            <span style={{ color: starColor }}>
                <FontAwesomeIcon icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : farStar} />
            </span>
            <span style={{ color: starColor }}>
                <FontAwesomeIcon icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : farStar} />
            </span>
            <span style={{ color: starColor }}>
                <FontAwesomeIcon icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : farStar} />
            </span>
            <span style={{ color: starColor }}>
                <FontAwesomeIcon icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : farStar} />
            </span>
            <span style={{ color: starColor }}>
                <FontAwesomeIcon icon={value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : farStar} />
            </span> {text && text}
        </div>
    )
}

Rating.defaultProps = {
    starColor: '#ffc107'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string,
    starColor: PropTypes.string
}

export default Rating
