import { User } from './models/User'

 const user = new User({ name: 'theKing', age: 20 })

user.on('change', () => {
  console.log("hejhoppla")
})
 

console.log(user)