import user from './user'

class Store {
  user = user
}

const useStore = () => {
  return new Store()
}

export { useStore }