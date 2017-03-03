'use strict'

class SLUGS {
    static get ENDPOINT() {
        return 'https://westus.api.cognitive.microsoft.com/';
    }

    static get DETECT() {
        return 'face/v1.0/detect';
    }

    //  TODO
    // static get DELETE_PERSON_FACE() {
    //     return 'face/v1.0/detect';
    // }

    // static get DELETE_PERSON() {
    //     return 'face/v1.0/detect';
    // }

    // static get DELETE_PERSON_GROUP() {
    //     return 'face/v1.0/detect';
    // }

    static get VERIFY() {
        return 'face/v1.0/verify';
    }

    static CREATE_PERSON(personGroupId) {
        return `face/v1.0/persongroups/${personGroupId}/persons`;
    }

    static CREATE_GROUP(personGroupId) {
        return `face/v1.0/persongroups/${personGroupId}`;
    }

    static ADD_PERSON_FACE(personGroupId, personId) {
        return `face/v1.0/persongroups/${personGroupId}/persons/${personId}/persistedFaces`;
    }

    static GET_PERSON_GROUPS(start) {
        return `face/v1.0/persongroups?start=${start}`;
    }
}

module.exports = SLUGS;
