import axios from 'axios'

export const getTasty = async () => {
    const api_url = 'https://wrapapi.com/use/alexjamison/homeit/cart/latest?wrapAPIKey=HCTPpA928xiR2xIr0ON2HkyaS8gKg4Lz'
    const response = await axios.get(api_url)
    const data = await response.data.coffee;
    console.log(data);
}