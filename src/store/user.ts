import { makeObservable, observable, computed, action, flow } from 'mobx'

class User {

  value = 0
  constructor() {
    makeObservable(this, {
      value: observable,
      double: computed,
      increment: action.bound,
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

export default new User()
