// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickTabItem, isActive} = props

  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabClassName = isActive ? 'active-image' : ''

  return (
    <li className="list-item">
      <button className="button" type="button">
        <img
          className={`thumbnail-image ${activeTabClassName}`}
          onClick={onClickTabItem}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
