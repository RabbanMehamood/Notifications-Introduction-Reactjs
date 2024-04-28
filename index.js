const Notification = props => {
  //  Write your code here.
  const {paratext, source} = props
  return (
    <div className='notification'>
      <img src={source} className='image' />
      <p className='parastyle'>{paratext}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div>
    <h1>Notification Page</h1>
    <Notification
      paratext='Notification received'
      source='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />
    <Notification
      paratext='Notification received'
      source='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />
    <Notification
      paratext='Notification received'
      source='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />
    <Notification
      paratext='Notification received'
      source='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
