import { db } from './base';

function getAllDocuments(collectionName) {
    return db.collection(collectionName).get()
        .then((querySnapshot) => {
            let docs = []
            querySnapshot.forEach((doc) => {
                docs.push(doc.id);
            })
            return docs;
        })
        .catch(error => {
            console.log(error);
            return Promise.reject(error)
        })
}

function getAllDocumentData(collectionName) {
    return db.collection(collectionName).get()
        .then((querySnapshot) => {
            let docs = []
            querySnapshot.forEach((doc) => {
                docs.push({ id: doc.id, data: doc.data() });
            })
            return docs;
        })
        .catch(error => {
            console.log(error);
            return Promise.reject(error)
        })
}

function getSpecificDocumentData(collectionName, documentName) {
    return db.collection(collectionName).doc(documentName).get()
        .then((doc) => {
            if (doc.exists) {
                return doc.data();
            }
            return Promise.reject("No such document");
        })
}

export { getAllDocuments, getAllDocumentData, getSpecificDocumentData };