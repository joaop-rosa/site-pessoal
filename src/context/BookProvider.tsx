import { createContext, useRef, useState, type PropsWithChildren } from "react"

const BookContext = createContext({})

export function BookProvider({ children }: PropsWithChildren) {
  const bookRef = useRef<HTMLDivElement>(null)
  const [currentLocation, setCurrentLocation] = useState(1)

  const paper1 = useRef<HTMLDivElement>(null)
  const paper2 = useRef<HTMLDivElement>(null)
  const paper3 = useRef<HTMLDivElement>(null)

  const numOfPapers = 3
  const maxLocation = numOfPapers + 1

  function openBook() {
    if (!bookRef.current) return
    bookRef.current.style.transform = "translateX(50%)"
  }

  function closeBook(isAtBeginning: boolean) {
    if (!bookRef.current) return

    if (isAtBeginning) {
      bookRef.current.style.transform = "translateX(0%)"
    } else {
      bookRef.current.style.transform = "translateX(100%)"
    }
  }

  function goNextPage() {
    if (
      paper1.current === null ||
      paper2.current === null ||
      paper3.current === null
    )
      return

    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook()
          paper1.current.classList.add("flipped")
          paper1.current.style.zIndex = "1"
          break
        case 2:
          paper2.current.classList.add("flipped")
          paper2.current.style.zIndex = "2"
          break
        case 3:
          paper3.current.classList.add("flipped")
          paper3.current.style.zIndex = "3"
          closeBook(false)
          break
        default:
          throw new Error("unkown state")
      }
      setCurrentLocation((prev) => prev + 1)
    }
  }

  function goPrevPage() {
    if (
      paper1.current === null ||
      paper2.current === null ||
      paper3.current === null
    )
      return

    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true)
          paper1.current.classList.remove("flipped")
          paper1.current.style.zIndex = "3"
          break
        case 3:
          paper2.current.classList.remove("flipped")
          paper2.current.style.zIndex = "2"
          break
        case 4:
          openBook()
          paper3.current.classList.remove("flipped")
          paper3.current.style.zIndex = "1"
          break
        default:
          throw new Error("unkown state")
      }

      setCurrentLocation((prev) => prev - 1)
    }
  }

  return <BookContext.Provider value={{}}>{children}</BookContext.Provider>
}
