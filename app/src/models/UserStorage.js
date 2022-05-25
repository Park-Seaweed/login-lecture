"use strict"

class UserStorage {
    static #users = {
        id: ["alsgur721", "박민혁", "박미녁"],
        psword: ["1234", "1234", "12345"],
        name: ["민혁", "박민혁", "박미녁" ], 
    }
    
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
}

module.exports = UserStorage;