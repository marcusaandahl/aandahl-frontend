// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { httpsCallable } from 'firebase/functions';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_M6sb0ufu6WOxcWABJDdHLrnRxP7Piyw",
  authDomain: "portfolio-336519.firebaseapp.com",
  databaseURL: "https://portfolio-336519-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-336519",
  storageBucket: "portfolio-336519.appspot.com",
  messagingSenderId: "930179796313",
  appId: "1:930179796313:web:7e72aaa5f1cc1a540f9048",
  measurementId: "G-6L03679T1F"
};

// Init App
const firebaseApp = initializeApp(firebaseConfig);

// Init Firestore
const firestore = getFirestore(firebaseApp)
// connectFirestoreEmulator(firestore, "127.0.0.1", 8081)

// Init Functions
const functions = getFunctions(firebaseApp);
// connectFunctionsEmulator(functions, "127.0.0.1", 5001);

const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://127.0.0.1:9099");

const storage = getStorage();

// Init Analytics
// getAnalytics(firebaseApp);

async function getProjects() {
  const projectsRef = collection(firestore, "projects");
  const querySnapshot = await getDocs(projectsRef);
  const projectArray = [];
  querySnapshot.forEach((doc) => {
    projectArray.push(doc.data());
  });
  return projectArray;
}

async function addProject(data) {
  const projectsRef = collection(firestore, "projects");
  await setDoc(projectsRef, data).catch(() => {})
}

async function delProject(title) {
  const projectsRef = collection(firestore, "projects").where('title', '==', title);
  await deleteDoc(projectsRef).catch(() => {});
}

async function getAllUsers() {
  const getUsers = httpsCallable(functions, 'users-getUsers');
  const res = await getUsers();
  return res;
};

async function delUser(uid, role) {
  const delUser = httpsCallable(functions, 'users-delUser');
  return await delUser({uid, role});
}

async function makeUserMod(uid, role) {
  const makeUserMod = httpsCallable(functions, 'users-makeUserMod');
  return await makeUserMod({uid, role});
}

async function makeUserBase(uid, role) {
  const makeUserBase = httpsCallable(functions, 'users-makeUserBase');
  return await makeUserBase({uid, role});
}



export { firebaseApp, firestore, functions, auth, storage, getProjects, addProject, delProject, getAllUsers, delUser, makeUserMod, makeUserBase };