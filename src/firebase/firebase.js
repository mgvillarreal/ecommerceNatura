import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc, updateDoc, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

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
            console.log('Product does not exist.');
        }
    }
    catch (error){
        console.error('Error fetching products by id: ', error);
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
            console.log('Products collection is empty');
        }
    }
    catch (error){
        console.error('Error fetching products: ', error);
    }
}

export async function getProductsByCategory(category){
    try{
        const filteredQuery = query( collection(db, 'products'), where('category', '==', category) );

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
            console.log('Products by category collection is empty');
        }
    }
    catch (error){
        console.error('Error fetching product by category: ', error);
    }
}

export async function sendOrder(order){
    const ordersCollection = collection(db, 'orders');
    try {
      const docRef = await addDoc(ordersCollection, order);
      return docRef.id;
    } catch (error) {
      console.error('Error adding new order: ', error);
    }
}