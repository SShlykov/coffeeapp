export default class CoffeeService {
    constructor() {
        this._apiBase = 'http://localhost:3001';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(
                `${res.status}`)
        }
        return await res.json();
    };

    getAllBestsellers = async () => {
        const res = await this.getResource('/bestsellers');
        return res.map(this._createId);
    };
    getAllCoffee = async () => {
        const res = await this.getResource('/coffee');
        return res.map(this._createId);
    };
    getAllGoods = async () => {
        const res = await this.getResource('/goods');
        return res.map(this._createId);
    };
    getCoffee = async (id) => {
      const res = await this.getResource(`/coffee?q=${id}`)||await this.getResource(`/goods?q=${id}`);
      console.log(res);
      return res[0];
    };
    _createId = (obj) => {
        if(obj.url.match(/I\/(.*)\._/gm)){
            obj.id = obj.url.match(/I\/(.*)\._/gm)[0].slice(2,-2)
        } else {
            obj.id = obj.url.match(/I\/(.*)\./gm)[0].slice(2,-1);
        }
        return obj
    }
}

