import Workcation from './components/Workcation'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <>
          <Workcation key={i} />
          <Testimonial key={i} />
        </>
      ))}
    </>
  )
}

export default App
