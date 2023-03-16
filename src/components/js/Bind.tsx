import React from 'react'
const w = window as any
export const Bind = () => {
  w.mdx = {}
  w.mdx.bind = function (thisArg, ...args) {
    let that = this // 调用bind的原函数
    let fn = function (...newArgs) {
      // that是一个this绑定了thisArg的函数
      return that.apply(
        // this是构造函数的实例的情况。如
        // const obj={a:1}
        // function func(){console.log(this.a)}
        // const BindFunc=func.bind(obj)
        // const instance =new BindFunc()
        // BindFunc内的this是指向obj的
        // new之后这个this会指向instance
        // instance中没有a属性，所以需要判断instance
        // this就是fn的实例
        // 直接调用时就是bind应该绑定的thisArg，new时就是fn的实例
        this instanceof fn ? this : thisArg,
        args.concat(newArgs)
      )
    }
    fn.prototype = Object.create(that.prototype) //保证原函数self的原型对象上的属性不丢失
    return fn
  }

  w.mdx.call = function (thisArg, ...args) {
    const that = this // 调用call的原函数

    let fn = Symbol('fn')
    thisArg[fn] = that

    const res = thisArg[fn](...args)

    delete thisArg[fn]

    return res
  }

  console.log(w.mdx)

  return (
    <div
      style={{
        width: '100%',
      }}
    ></div>
  )
}
