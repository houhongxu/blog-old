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
        height: 200,
        backgroundColor: 'gray',
        display: 'flex',
      }}
    >
      <div
        style={{
          flex: 1,
          height: '100%',
          backgroundColor: 'blue',
        }}
      ></div>
      <div
        style={{
          flex: 1,
          height: '100%',
          backgroundColor: 'black',
        }}
      ></div>
      <div
        style={{
          flex: 1,
          height: '100%',
          backgroundColor: 'green',
        }}
      ></div>
    </div>
  )
}
