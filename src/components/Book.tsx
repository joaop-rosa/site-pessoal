import { useBook } from "@/context/BookProvider"
import s from "./Book.module.css"
import { Paper } from "./Paper"
import { CoverPaper } from "./BookPages/CoverPaper"
import { EndPaper } from "./BookPages/EndPaper"
import cn from "classnames"

export function Book() {
  const { bookRef, paper2, paper1, paper3, isOpen, currentLocation } = useBook()

  return (
    <div
      id='book'
      ref={bookRef}
      className={cn(s.book, { [s.closed]: !isOpen && currentLocation === 2 })}
    >
      <CoverPaper />

      <Paper
        innerRef={paper1}
        number={3}
        frontContent='Front 2'
        backContent='Back 2'
      />
      <Paper
        innerRef={paper2}
        number={4}
        frontContent='Front 3'
        backContent='Back 3'
      />

      <Paper
        innerRef={paper3}
        number={5}
        frontContent='Front 4'
        backContent='Back 4'
      />

      <EndPaper />
    </div>
  )
}
