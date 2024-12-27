import { doc, setDoc, collection, addDoc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"

// adaptador para Firestore
class FireStoreAdapter {
    constructor(firestore) {
        this.db = firestore
    }
    
    createDocument = async (path, id, data) => setDoc(doc(this.db, path, id), data)

    createCollection = async (path, data) => addDoc(collection(this.db, path), data)

    getDocument = async (path, id) => getDoc(doc(this.db, path, id));

    getCollection = async (path) => getDocs(collection(this.db, path));

}
export default FireStoreAdapter
