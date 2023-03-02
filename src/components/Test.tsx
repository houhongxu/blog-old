import React from 'react'

export const Test = () => {
  function pMap(list: any[], mapper: Function, cur: number) {
    cur = cur || list.length
    let step: any = Promise.resolve()
    do {
      let temp = list.splice(0, cur)
      step = step.then(() =>
        Promise.all(
          temp.map((i, index) =>
            Promise.resolve(i).then((e) => mapper(e, index))
          )
        )
      )
    } while (list.length)
  }
  return (
    <div
      style={{
        width: '100%',
      }}
    ></div>
  )
}
