import './App.css'
import Input from './components/Input'
import Button from './components/Button'
import NoteList from './components/NoteList'

function App() {
  return (
    <div className="App">
      <div className="insert">
        <Input rows="1" placeholder="Write a title..." />
        <Input rows="5" placeholder="Write a note..." />
        <Button />
      </div>
      <NoteList />
    </div>
  )
}

export default App