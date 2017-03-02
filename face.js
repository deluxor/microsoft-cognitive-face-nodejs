'use strict'

const API = require('./lib/api.js');

class FACE {
    constructor(_subscriptionKey) {
        this._API = new API(_subscriptionKey);
    }

    verify() {

    }

    addPersonFace(groupId, personId, image) {
        return new Promise((resolve, reject) => {
            this._API.addPersonFaceApi(groupId, groupName)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    createPerson(groupId, groupName) {
        return new Promise((resolve, reject) => {
            this._API.createPersonApi(groupId, groupName)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    createGroup(groupId, groupName) {
        return new Promise((resolve, reject) => {
            this._API.createGroupApi(groupId, groupName)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    listGroups(start = 1) {
        return new Promise((resolve, reject) => {
            this._API.listGroupsApi(start)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

}

module.exports = FACE;
