import s from "./Book.module.css"

export function Book() {
  return (
    <div id='book' className={s.book}>
      <div id='p1' className={s.paper}>
        <div className={s.front}>
          <div id='f1' className={s.frontContent}>
            <h1>Front 1</h1>
          </div>
        </div>
        <div className={s.back}>
          <div id='b1' className={s.backContent}>
            <h1>Back 1</h1>
          </div>
        </div>
      </div>
      <div id='p2' className={s.paper}>
        <div className={s.front}>
          <div id='f2' className={s.frontContent}>
            <h1>Front 2</h1>
          </div>
        </div>
        <div className={s.back}>
          <div id='b2' className={s.backContent}>
            <h1>Back 2</h1>
          </div>
        </div>
      </div>
      <div id='p3' className={s.paper}>
        <div className={s.front}>
          <div id='f3' className={s.frontContent}>
            <h1>Front 3</h1>
          </div>
        </div>
        <div className={s.back}>
          <div id='b3' className={s.backContent}>
            <h1>Back 3</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
