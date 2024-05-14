import { API_URL_SPREEDSHEET } from "../constants"

export const getPrograms = async () => {

    const response = await fetch(API_URL_SPREEDSHEET);
    const data = await response.json();
    return data;
}