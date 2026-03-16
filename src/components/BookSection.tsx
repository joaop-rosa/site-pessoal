import s from "./BookSection.module.css"
import logo from "@/assets/background.png"
import { Book } from "./Book"
import { useBook } from "../context/BookProvider"

export function BookSection() {
  const { goPrevPage, goNextPage } = useBook()

  return (
    <section className={s.section}>
      <img src={logo} alt='' className={s.imageBackground} />
      <div className={s.bookWrapper}>
        <Book />
      </div>
      <button onClick={goPrevPage} type='button'>
        Prev Page
      </button>
      <button onClick={goNextPage} type='button'>
        Next Page
      </button>
    </section>
  )
}
