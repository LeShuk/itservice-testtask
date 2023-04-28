import axios from "axios";

export default class TwoArraysService {
    //todo: захардкожено, избави боже
    static BACKEND_TWO_ARRAYS_URL = 'http://localhost:8080/api/twoarrays';

    static async getAll() {
        const result = await axios.get(this.BACKEND_TWO_ARRAYS_URL);
        return result.data;
    }
    static async getById(id) {
        const result = await axios.get(this.BACKEND_TWO_ARRAYS_URL+`${id}`);
        return result.data;
    }
    static async calculate(item) {
        const result = await axios.post(this.BACKEND_TWO_ARRAYS_URL + '/calculate', item);
        return result.data;
    }
    static async save(item) {
        const result = await axios.post(this.BACKEND_TWO_ARRAYS_URL, item);
        return result.data;
    }
    static async update(item) {
        const result = await axios.put(this.BACKEND_TWO_ARRAYS_URL + `${item.id}`, item);
        return result.data
    }

}