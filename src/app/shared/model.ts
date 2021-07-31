

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





export type Response = {
    User: User
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

export type Variables = {
    id?: String
    data?: UpdateUserDto,
    InputUserDto?: InputUserDto
}