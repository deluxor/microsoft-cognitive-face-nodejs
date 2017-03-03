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

    addPersonFaceApi(payload) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: {
                    'Ocp-Apim-Subscription-Key': this._subscriptionKey,
                    'Content-Type': 'application/octet-stream'
                },
                open_timeout: 30000
            };
            NEEDLE.post(`${SLUGS.ENDPOINT}${SLUGS.ADD_PERSON_FACE(payload.groupId, payload.personId)}`, payload.image, options, function (err, resp, body) {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(body);
                }
            });
        });
    }

    detectFaceApi(image) {
        return new Promise((resolve, reject) => {
            const options = {
                headers: {
                    'Ocp-Apim-Subscription-Key': this._subscriptionKey,
                    'Content-Type': 'application/octet-stream'
                },
                open_timeout: 30000
            };
            NEEDLE.post(`${SLUGS.ENDPOINT}${SLUGS.DETECT}`, image, options, function (err, resp, body) {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(body);
                }
            });
        });
    }

    verifyPersonFaceApi(payload) {
        return new Promise((resolve, reject) => {
            REQUEST.post(`${SLUGS.ENDPOINT}${SLUGS.VERIFY}`)
                .set('Content-Type', 'application/json')
                .set('Ocp-Apim-Subscription-Key', this._subscriptionKey)
                .send({
                    faceId: payload.faceId,
                    personGroupId: payload.personGroupId,
                    personId: payload.personId
                })
                .end(function (err, res) {
                    if (err) {
                        reject(new Error(err));
                    } else {
                        resolve(res.body);
                    }
                });
        });
    }

    verifyFaceFaceApi(payload) {
        return new Promise((resolve, reject) => {
            REQUEST.post(`${SLUGS.ENDPOINT}${SLUGS.VERIFY}`)
                .set('Content-Type', 'application/json')
                .set('Ocp-Apim-Subscription-Key', this._subscriptionKey)
                .send({
                    faceId1: payload.faceId1,
                    faceId2: payload.faceId2
                })
                .end(function (err, res) {
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
