//const cars: string[] = ['Ford', 'Audi']
//const cars2: Array<string> = ['Ford', 'Audi']

// const promise = new Promise<string>((resolve) => {
//   setTimeout(() => {
//     resolve('Promise resolved')
//   }, 2000)
// })

// promise.then((data) => {
//   console.log(data.toUpperCase())
// })

function mergeObject<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b)
}

const merged = mergeObject({ name: 'Dima' }, { age: 26 })
const merged2 = mergeObject({ model: 'Ford' }, { year: 2010 })
// const merged3 = mergeObject('aaa', 'dfg') // error
//console.log(merged.name, merged.age)

// ==============

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `В этом объекте ${value.length} символов`,
  }
}
// console.log(withCount('Привет TS'))
// console.log(withCount(['I', 'am', 'array']))
// console.log(withCount(20) // error

// ==============

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}
const person = {
  name: 'Dima',
  age: 30,
}
// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job')) // error

// ==============
class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['I', 'am', 'strings'])
strings.add('!')
strings.remove('am')
console.log(strings)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(4)
numbers.remove(3)
console.log(numbers)

//const objects = new Collection({a: 1}, {b: 2}) // error

// ==============

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}

  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }

  return car as Car
}

// ==============

const cars: Readonly<Array<string>> = ['Ford', 'Audi']
// cars.shift() // error

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020,
}
//ford.model = 'Ferrary' // error
