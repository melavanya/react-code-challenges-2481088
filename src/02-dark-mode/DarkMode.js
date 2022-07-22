export default function DarkMode () {
  return (
    <div className='page'>
      <button className='dark-mode-button' onClick={() => document.querySelector('.page').className += " dark-mode"
      }>Dark Mode</button>
      <button className='light-mode-button' onClick={() => document.querySelector('.page').classList.remove("dark-mode")
    }>Light Mode</button>
    </div>
  )
}
