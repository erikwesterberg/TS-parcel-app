import { User } from './models/User'

 const user = new User({ name: 'theKing', age: 20 })

 user.set({ name: 'newKing', age: 666 })
 
 console.log(user.get('name'))
 console.log(user.get('age'))
 

