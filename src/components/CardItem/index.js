// Write your code here.
import './index.css'

const CardItem = props => {
  const {c, title, description, img} = props
  return (
    <li className={`${c} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={img} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
