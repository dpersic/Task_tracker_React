import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {
    return (
        <button 
        onClick={onClick} style={{background: color}} className='btn'>{text}
        
        </button>
    ) 
}


Button.defaultProps= {
    color: 'steelBlue'
}
/*
If have an error its not  Button.PropTypes but Button.porpTypes
*/ 

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
