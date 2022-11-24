// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc,
    getDocs,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    updateDoc
 } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBgeQ9v2nxBTPZv_mhA0K2W6Rv8mv9TCs",
    authDomain: "fir-javascript-crud-21ac3.firebaseapp.com",
    projectId: "fir-javascript-crud-21ac3",
    storageBucket: "fir-javascript-crud-21ac3.appspot.com",
    messagingSenderId: "289856883504",
    appId: "1:289856883504:web:a121661c3ef4fda5bbd6f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveTask = (title, description) => 
    addDoc(collection(db, 'tasks'), {title, description});

export const getTasks = () => getDocs(collection(db, 'tasks'))

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)

export const deleteTask = id => deleteDoc(doc(db, 'tasks', id))

export const getTask = id => getDoc(doc(db, "tasks", id))

export const updateTask = (id, newFields) => updateDoc(doc(db,'tasks', id), newFields)