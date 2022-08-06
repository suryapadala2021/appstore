import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app
  return (
    <li className="app">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
