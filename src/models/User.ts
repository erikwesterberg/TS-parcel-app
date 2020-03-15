interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName]
  }
  
  set(update: UserProps): void {
    // Overwrite this.data with new updated object.
    Object.assign(this.data, update)
  }
}