import { useBook } from "@/context/BookProvider"
import cn from "classnames"
import s from "./Paper.module.css"
import type React from "react"
import type { ReactNode } from "react"

export function Paper({
  innerRef,
  number,
  frontContent,
  backContent,
}: {
  innerRef: React.RefObject<HTMLDivElement | null> | null
  number: number
  frontContent: ReactNode
  backContent: ReactNode
}) {
  const { currentLocation, isOpen } = useBook()

  const isInnerPaper = number !== 2 && number !== 6

  const classname = cn(s.paper, {
    [s.cover]: number === 2,
    [s.open]: isOpen,
    [s.closed]: !isOpen,
    [s.closedStart]: !isOpen && currentLocation === 1,
    [s.closedEnd]: !isOpen && currentLocation === 6,
    [s.innerPaper]: isInnerPaper,
    [s.p1]: number === 2,
    [s.p2]: number === 3,
    [s.p3]: number === 4,
    [s.p4]: number === 5,
    [s.end]: number === 6,
    [s.flipped]: currentLocation === number,
    [s.alreadyFlipped]: currentLocation > number,
  })

  return (
    <div ref={innerRef} className={classname}>
      <div className={s.front}>
        <div
          className={cn(s.frontContent, {
            [s.innerPageFrontContent]: isInnerPaper,
          })}
        >
          {frontContent}
        </div>
      </div>
      <div className={s.back}>
        <div
          className={cn(s.backContent, {
            [s.innerPageBackContent]: isInnerPaper,
          })}
        >
          {backContent}
        </div>
      </div>
    </div>
  )
}
