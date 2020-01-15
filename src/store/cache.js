export const get = name => {
  const data = sessionStorage.getItem(name)
  return JSON.parse(data)
}

export const set = (name, value) => {
  sessionStorage.setItem(name, JSON.stringify(value))
}

export const clear = name => {
  sessionStorage.setItem(name, null)
}
