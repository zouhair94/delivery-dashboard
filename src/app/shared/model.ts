

type User = {
    _id: String
    name: String
    surname: String
    email: String
    password: String
    phone: String
    companyId: String
    role: String
    token: String
    createdAt: String
    updatedAt: String
}

type Adress = {
    _id: String
    title: String
    address: String
    zipCode: String
    lat: String
    lng: String
    by: User
    }





export type Response = {
    User: User
    Adress: Adress
};


type UpdateUserDto = {
    name: String
    surname: String
    email: String
    phone: String
    role: String
    companyId: String
    credit: Number
    };

type InputUserDto = {
name: String
surname: String
email: String
password: String
phone: String
role: String
companyId: String
credit: Number
token: String
createdAt: String
}

type UpdateAddress = {
    title: String
    address: String
    lat: String
    lng: String
    }

export type Variables = {
    id?: String
    data?: UpdateUserDto
    InputUserDto?: InputUserDto
    UpdateAddress?: UpdateAddress
}