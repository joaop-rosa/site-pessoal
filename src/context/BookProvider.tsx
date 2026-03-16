import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type PropsWithChildren,
} from "react"

type BookContextType = {
  goNextPage: () => void
  goPrevPage: () => void
  currentLocation: number
  maxLocation: number
  paper1: React.RefObject<HTMLDivElement | null> | null
  paper2: React.RefObject<HTMLDivElement | null> | null
  paper3: React.RefObject<HTMLDivElement | null> | null
  bookRef: React.RefObject<HTMLDivElement | null> | null
  coverPaper: React.RefObject<HTMLDivElement | null> | null
  endPaper: React.RefObject<HTMLDivElement | null> | null
  isOpen: boolean
  isAtEnd: boolean
}

const INITIAL_CONTEXT: BookContextType = {
  goNextPage: () => {},
  goPrevPage: () => {},
  currentLocation: 1,
  maxLocation: 1,
  coverPaper: null,
  paper1: null,
  paper2: null,
  paper3: null,
  endPaper: null,
  bookRef: null,
  isOpen: false,
  isAtEnd: false,
}

const BookContext = createContext(INITIAL_CONTEXT)

export function BookProvider({ children }: PropsWithChildren) {
  const bookRef = useRef<HTMLDivElement | null>(null)
  const [currentLocation, setCurrentLocation] = useState(1)
  const [isOpen, setOpen] = useState(false)
  const isAtEnd = useMemo(() => currentLocation === 6, [currentLocation])

  const coverPaper = useRef<HTMLDivElement | null>(null)
  const paper1 = useRef<HTMLDivElement | null>(null)
  const paper2 = useRef<HTMLDivElement | null>(null)
  const paper3 = useRef<HTMLDivElement | null>(null)
  const endPaper = useRef<HTMLDivElement | null>(null)

  const numOfPapers = 5
  const maxLocation = numOfPapers + 1

  function openBook() {
    console.log("open book")
    if (!bookRef.current) return
    bookRef.current.style.transform = "translate(50%, 15px)"
    setOpen(true)
  }

  function closeBook(isAtBeginning: boolean) {
    console.log("close book isAtBeginning: ", isAtBeginning)
    if (!bookRef.current) return

    if (isAtBeginning) {
      bookRef.current.style.transform = "translateX(0%)"
    } else {
      bookRef.current.style.transform = "translateX(100%)"
    }

    setOpen(false)
  }

  const goNextPage = useCallback(() => {
    if (
      coverPaper.current === null ||
      endPaper.current === null ||
      paper1.current === null ||
      paper2.current === null ||
      paper3.current === null
    )
      return

    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook()
          break
        case 2:
          coverPaper.current.style.zIndex = "1"
          break
        case 3:
          paper1.current.style.zIndex = "2"
          break
        case 4:
          paper2.current.style.zIndex = "3"
          paper3.current.style.zIndex = "4"
          break
        case 5:
          closeBook(false)
          endPaper.current.style.zIndex = "5"
          break
        default:
          throw new Error("unkown state")
      }
      setCurrentLocation((prev) => prev + 1)
    }
  }, [currentLocation, maxLocation])

  const goPrevPage = useCallback(() => {
    if (
      coverPaper.current === null ||
      endPaper.current === null ||
      paper1.current === null ||
      paper2.current === null ||
      paper3.current === null
    )
      return

    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true)
          coverPaper.current.style.zIndex = "5"
          break
        case 3:
          paper1.current.style.zIndex = "4"
          paper2.current.style.zIndex = "3"
          break
        case 4:
          paper3.current.style.zIndex = "2"
          break
        case 5:
          endPaper.current.style.zIndex = "1"
          break
        case 6:
          openBook()
          break
        default:
          throw new Error("unkown state")
      }

      setCurrentLocation((prev) => prev - 1)
    }
  }, [currentLocation])

  const value = useMemo(
    () => ({
      goNextPage,
      goPrevPage,
      currentLocation,
      maxLocation,
      paper1,
      paper2,
      paper3,
      bookRef,
      coverPaper,
      endPaper,
      isOpen,
      isAtEnd,
    }),
    [goNextPage, goPrevPage, currentLocation, maxLocation, isOpen, isAtEnd],
  )

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useBook = () => useContext(BookContext)
