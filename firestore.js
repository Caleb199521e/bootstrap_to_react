import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path to your firebase.js file

// Adding a new product
export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    console.log("Product added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

// Fetching products
export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
};
