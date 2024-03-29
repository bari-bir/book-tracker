import { getTokenInLocalStorage } from "../utils/assets.util"

export const BASE_URL: string = 'https://api.birkitap.kz/'
export const headers = {
    headers: {
        'Authorization': `Bearer ${getTokenInLocalStorage()}`
    }
}