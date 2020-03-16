import { User } from './models/User'

 const user = new User({ name: 'theKing', age: 20 })

user.on('change', () => {
  console.log("hejhoppla")
})

user.on('sdf', () => {
  console.log("hejhoppla2")
})

user.on('noob', () => {
  console.log("hejhoppla3")
})

user.trigger('change')