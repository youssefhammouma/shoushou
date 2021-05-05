export const TOKEN = 'token'
export const USER = 'user'
export const CART = 'cart'

export const isConnected = () => {
    const tokenString = localStorage.getItem(USER)
    return !!tokenString;
}

export const disconnect = () => {
    localStorage.removeItem(USER)
    localStorage.removeItem(TOKEN)
}