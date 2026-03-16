import { BookSection } from "./components/BookSection"
import { BookProvider } from "./context/BookProvider"

function App() {
  return (
    <BookProvider>
      <BookSection />
    </BookProvider>
  )
}

export default App
