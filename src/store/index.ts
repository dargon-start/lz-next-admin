import { makeObservable, observable, computed, action, flow } from 'mobx'

class Store {

  value = 0
  constructor() {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action,
    })
  }

  get double() {
    return this.value * 2
  }

  increment() {
    console.log('increment')
    this.value++
  }

}

export default Store