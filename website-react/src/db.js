import firebase from 'firebase';
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

function postDocument(collectionName, documentName, document) {
    db.collection(collectionName).doc(documentName).set(document)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((e) => {
            console.log(e);
        });
}

function mergeDocumentData(collectionName, documentName, mergeData) {
    db.collection(collectionName).doc(documentName).set(mergeData, {merge: true})
        .then(() => {
            console.log("Document successfully merged!");
        })
        .catch((e) => {
            console.log(e);
        });
}

function delDocument(collectionName, documentName) {
    db.collection(collectionName).doc(documentName).delete()
        .then(() => {
            console.log("Document successfully deleted!")
        })
        .catch((e) => {
            console.log(e)
        });
}

function delField(collectionName, documentName, fieldName) {
    let updateObj = {}
    updateObj[fieldName] = firebase.firestore.FieldValue.delete();
    
    db.collection(collectionName).doc(documentName).update(updateObj);
}

function updateField(collectionName, documentName, fieldName, fieldValue) {
    let updateObj = {}
    updateObj[fieldName] = fieldValue;

    delField(collectionName, documentName, fieldName)
        .then(() => {
            mergeDocumentData(collectionName, documentName, updateObj);
        })
        .catch((e) => {
            console.log(e);
        });
}

export { getAllDocuments, getAllDocumentData, getSpecificDocumentData, postDocument, mergeDocumentData, delDocument, delField, updateField };