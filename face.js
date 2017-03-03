'use strict'

const API = require('./lib/api.js');

class FACE {
    constructor(_subscriptionKey) {
        this._API = new API(_subscriptionKey);
    }

    verifyPersonFace(faceId, personGroupId, personId) {
        return new Promise((resolve, reject) => {
            const payload = {
                faceId,
                personGroupId,
                personId
            };
            this._API.verifyPersonFaceApi(payload)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    verifyFaceFace(faceId1, faceId2) {
        return new Promise((resolve, reject) => {
            const payload = {
                faceId1,
                faceId2
            };
            this._API.verifyFaceFaceApi(payload)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    detectFace(image) {
        return new Promise((resolve, reject) => {
            this._API.detectFaceApi(image)
                .then((res) => {
                    resolve(res[0].faceId);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    addPersonFace(groupId, personId, image) {
        return new Promise((resolve, reject) => {
            const payload = {
                groupId,
                personId,
                image
            };
            this._API.addPersonFaceApi(payload)
                .then((res) => {
                    console.log(res);
                    resolve(res.persistedFaceId);
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
                    resolve(res.personId);
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
