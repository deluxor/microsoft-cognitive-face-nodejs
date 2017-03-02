'use strict'

const SLUGS = require('./api_slugs');
const REQUEST = require('superagent');
const NEEDLE = require('needle');

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
            const options = {
                headers: {
                    'Ocp-Apim-Subscription-Key': this._subscriptionKey,
                    'Content-Type': 'application/octet-stream'
                }
            }

            NEEDLE.post(`${SLUGS.ENDPOINT}${SLUGS.ADD_PERSON_FACE(groupId, personId)}`, image, options, function (err, resp, body) {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(res.body);
                }
            });
        });
    }
}

module.exports = API;
