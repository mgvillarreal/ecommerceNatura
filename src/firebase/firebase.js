// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc, updateDoc, writeBatch } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuWm4LASV3wWzwnJRf0i2KrJv3H_D-JHY",
  authDomain: "naturaecommerce-60f9b.firebaseapp.com",
  projectId: "naturaecommerce-60f9b",
  storageBucket: "naturaecommerce-60f9b.firebasestorage.app",
  messagingSenderId: "945341105273",
  appId: "1:945341105273:web:a4347e4584e39f408040a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProductById(id){
    const documentRef = doc(db, 'products', id);

    try{
        const snapshot = await getDoc(documentRef);
        if(snapshot.exists()){
            return snapshot.data();
        }
        else{
            console.log('Document does not exist.');
        }
    }
    catch (error){
        console.error('Error getting the document: ', error);
    }
}

export async function getProducts(){
    try{
        const querySnapshot = await getDocs(collection(db, 'products'));
        if(querySnapshot.size !== 0){
            const productsList = querySnapshot.docs.map((docu) => {
                return{
                    id: docu.id,
                    ...docu.data()
                }
            });
            return productsList;
        }
        else{
            console.log('Collection is empty');
        }
    }
    catch (error){
        console.error('Error getting the collection: ', error);
    }
}

export async function getProductsByCategory(category){
    try{
        const filteredQuery = query( collection(db, 'products'), where('category', '=', category) );

        const querySnapshot = await getDocs(filteredQuery);
        if(querySnapshot.size !== 0){
            const productsList = querySnapshot.docs.map((docu) => {
                return{
                    id: docu.id,
                    ...docu.data()
                }
            });
            return productsList;
        }
        else{
            console.log('Collection is empty');
        }
    }
    catch (error){
        console.error('Error getting the document: ', error);
    }
}