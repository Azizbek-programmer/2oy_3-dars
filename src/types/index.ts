export interface IProduct {
    id: number
    price: number
    title: string
    thumbnail: string
    description: string
    category: string
}

export interface IUser {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: {
      color: string
      type: string
    }
  }
  

export interface IResponse {
    limit: number
    products: IProduct[]
    skip: number
    total: number
}
export interface IResponseUser {
    limit: number
    users: IUser[]
    skip: number
    total: number
}
