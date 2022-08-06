// Write your code here
import './index.css'

const TabItem = props => {
  const {tab, changeTab, isActive} = props
  const {displayText, tabId} = tab
  const click = () => {
    changeTab(tabId)
  }
  const classAdd = isActive ? 'active' : ''
  return (
    <li>
      <button type="button" onClick={click} className="btn">
        <h1 className={`${classAdd} tab-name}`}>{displayText}</h1>
      </button>
    </li>
  )
}
export default TabItem
