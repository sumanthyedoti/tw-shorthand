import Workcation from './components/Workcation'
import Testimonial from './components/Testimonial'
import Pricing from './components/Pricing'

function App() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <Workcation />
          <Testimonial />
          <Pricing />
        </div>
      ))}
    </>
  )
}

export default App
