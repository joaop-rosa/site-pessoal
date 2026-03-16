import { useBook } from "@/context/BookProvider"
import { Paper } from "../Paper"

import s from "./CoverPaper.module.css"

export function CoverPaper() {
  const { coverPaper } = useBook()

  return (
    <Paper
      innerRef={coverPaper}
      backContent={<BackContent />}
      frontContent={<FrontContent />}
      number={2}
    />
  )
}

function FrontContent() {
  return (
    <div className={s.cover}>
      <h1 className={s.title}>Portfólio</h1>
      <h3 className={s.name}>João Paulo da Rosa</h3>
      <h4 className={s.nameSubtitle}>Front-end Developer</h4>
    </div>
  )
}

function BackContent() {
  return <div className={s.cover}>"Cover back"</div>
}
