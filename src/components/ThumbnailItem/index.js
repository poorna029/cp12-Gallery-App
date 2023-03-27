// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {val, f1, isActive} = props
  console.log(isActive)
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = val
  const fu = () => {
    f1(imageUrl, imageAltText)
  }
  return (
    <li className="thum">
      <button onClick={fu} type="button" className="imgButt">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`${isActive ? 'add' : 'normal'}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
