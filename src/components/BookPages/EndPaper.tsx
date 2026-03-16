import { useBook } from "@/context/BookProvider"
import { Paper } from "../Paper"

import s from "./EndPaper.module.css"

export function EndPaper() {
  const { endPaper } = useBook()

  return (
    <Paper
      innerRef={endPaper}
      number={6}
      backContent={<BackContent />}
      frontContent={<FrontContent />}
    />
  )
}

function FrontContent() {
  return <div className={s.cover}>"End Front"</div>
}

function BackContent() {
  return <div className={s.cover}>"End Back"</div>
}
