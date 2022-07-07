import propTypes from 'prop-types';

function card({children, reverse}) {
  return (
  //  <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  <div className="card" style={{
    backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ? '#fff' : '#000',
  }
  }>{children}</div>
  )
}

card.defaultProps = {
    reverse: false,
}

card.propTypes = {
    children: propTypes.node.isRequired,
    reverse: propTypes.bool,
}
export default card;