export class Store {
    static #store = {};

    static resetStore = () => this.#store = {};

    static get store() {
        return this.#store;
    }

    static addData = (newData = {}) => {
        this.#store = {
            ...this.#store,
            ...newData,
        };
    }
}
