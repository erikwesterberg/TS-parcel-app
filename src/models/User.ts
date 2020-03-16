import axios, { AxiosResponse } from 'axios'
import { Eventing } from './Eventing'

interface UserProps {
  id?: number; 
  name?: string;
  age?: number;
}


export class User {
  events: Eventing = new Eventing()

  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName]
  }
  
  set(update: UserProps): void {
    // Overwrite this.data wi th new updated object.
    Object.assign(this.data, update)
  }

  fetch(): void {
     axios.get(`http://localhost:3000/users/${this.get('id')}`).then((res: AxiosResponse): void => {
        this.set(res.data)
     })
  }

  save(): void {
    const id = this.get('id')

    if(this.get('id')) {
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      axios.post(`http://localhost:3000/users`, this.data)
    }
  }
}