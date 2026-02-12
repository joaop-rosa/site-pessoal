import s from "./App.module.css"
import logo from "@/assets/background.png"
import { Book } from "./components/Book"

function App() {
  return (
    <section className={s.section}>
      <img src={logo} alt='' className={s.imageBackground} />
      <div className={s.bookWrapper}>
        <Book />
      </div>
    </section>
  )
}

export default App
