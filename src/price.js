import {commerce} from "@faker-js/faker";

const Price = async (data) => {
    for(let i = 0; i < data.results.length; i++){
        let pass = data.results[i];
        try{
            pass["price"] = commerce.price(1000000, 6000000, 0, "£")
        } catch(error){
            return error;
        }
    }
    return data
}

export default Price