const FACE = require('../face.js');

const face = new FACE('84134d36c79f45dda8b4bb47b164ce29');

//====  Creates a new person group with the provided name and id
// face.createGroup('teste', 'TESTE')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//====  Creates a new person for a given groupId
// face.createPerson('teste', 'João Tiago Duarte')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//====  List all the groups for the previous provided Subscription Key
// face.listGroups()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//====  Adds a new face(image) to the given personId and groupId
face.addPersonFace('teste', '4157c09a-46ec-4eff-801b-e4e19a86d4be', image)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
