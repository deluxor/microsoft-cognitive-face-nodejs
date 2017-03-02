'use strict'

const SLUGS = require('./api_slugs');
const REQUEST = require('superagent');

class API {
    constructor(subscriptionKey) {
        this._subscriptionKey = subscriptionKey;
    }

    createGroupApi(groupId, name) {
        return new Promise((resolve, reject) => {
            REQUEST.put(`${SLUGS.ENDPOINT}${SLUGS.CREATE_GROUP(groupId)}`)
                .set('Content-Type', 'application/json')
                .set('Ocp-Apim-Subscription-Key', this._subscriptionKey)
                .send({ name })
                .end(function (err, res) {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(res.body);
                    }
                });
        });
    }

    listGroupsApi(start) {
        return new Promise((resolve, reject) => {
            REQUEST.get(`${SLUGS.ENDPOINT}${SLUGS.GET_PERSON_GROUPS(start)}`)
                .set('Content-Type', 'application/json')
                .set('Ocp-Apim-Subscription-Key', this._subscriptionKey)
                .end(function (err, res) {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(res.body);
                    }
                });
        });
    }

    createPersonApi(groupId, name) {
        return new Promise((resolve, reject) => {
            REQUEST.post(`${SLUGS.ENDPOINT}${SLUGS.CREATE_PERSON(groupId)}`)
                .set('Content-Type', 'application/json')
                .set('Ocp-Apim-Subscription-Key', this._subscriptionKey)
                .send({ name })
                .end(function (err, res) {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(res.body);
                    }
                });
        });
    }

    addPersonFaceApi(groupId, personId, image) {
        return new Promise((resolve, reject) => {
            const req = REQUEST.post(`${SLUGS.ENDPOINT}${SLUGS.ADD_PERSON_FACE(groupId, personId)}`)
                .set('Content-Type', 'application/octet-stream')
                .set('Ocp-Apim-Subscription-Key', this._subscriptionKey)
                .end(function (err, res) {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(res.body);
                    }
                });
            image.pipe(req);
        });
    }
}

module.exports = API;
