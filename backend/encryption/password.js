import bcrypt from 'bcrypt'

export const hashPassword = async (password)=>{
    const dbPassword = await bcrypt.hash(password,10)
    return dbPassword
}

export const comparePassword = async (password,dbPassword)=>{
    const plainPassword = bcrypt.compare(password,dbPassword)
    return plainPassword
}