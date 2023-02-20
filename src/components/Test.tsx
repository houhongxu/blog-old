import React from 'react'

export const Test = () => {
  const a = () => {
    console.log('测试js执行')

    return '测试mdx'
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
