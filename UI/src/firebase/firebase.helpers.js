import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "gg-shop-fb29f.firebaseapp.com",
  databaseURL: "https://gg-shop-fb29f.firebaseio.com",
  projectId: "gg-shop-fb29f",
  storageBucket: "gg-shop-fb29f.appspot.com",
  messagingSenderId: "872910696869",
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: "G-W2TSLXYX4L"
};

firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * Creates collection and inserts documents in this collection
 * @param {*} key name of collection
 * @param {*} elementsToAdd documents to add to FB
 */
export const addCollectionAndDocuments = async (key, elementsToAdd) => {
  const collectionRef = firestore.collection(key);

  //CREATE BATCH - SIMILART TO TRANSACTION IN SQL
  const batch = firestore.batch();

  elementsToAdd.forEach(item => {
    //GET collection ref and generate random ID FOR each document I am about to insert
    const docRef = collectionRef.doc();
    batch.set(docRef, item);
  });

  //SIMILAR TO "COMMIT TRANSACT" IN SQL
  return await batch.commit();
};
/**
 * CONVERTS COLLECTION FROM FireStore to OBJECT MAP
 * @param {*} collection - collection of items in FireStore
 * @retunrs Normalized object with keys and values
 */
export const mapCollectionSnaphotToObject = collection => {
  const formattedCollection = collection.docs
    .map(document => {
      const { title, items } = document.data();
      //RETURNS ARRAY OF OBJECTS
      return {
        id: document.id,
        title,
        items,
        route: encodeURI(titleFormatter(title))
      };
    })
    .sort((v1, v2) => sortAscendString(v1.title, v2.title))
    .reduce((collectionProcessed, currentCollection) => {
      //NORMALIZE DATA AND RETURN OBJECT MAP OF OBJECTS
      collectionProcessed[
        titleFormatter(currentCollection.title)
      ] = currentCollection;
      return collectionProcessed;
    }, {});

  return formattedCollection;
};

export const addUserProfile = async (currentUser, data) => {
  if (currentUser == null) return;

  //GET USER REFERENCE BASED ON ID RETURNED FROM FIRESTORE WHEN WE LOGIN SO WE CAN USE SNAPSHOT TO GET DETAILS
  const userRef = firestore.doc(`users/${currentUser.uid}`);

  //GET SNAPSHOT TO CHECK WETHER USER EXISTS OR NOT
  //SNAPSHOT DESCRIBES DATA
  const snapShot = await userRef.get();

  //SNAPSHOT TELLS US IF WE HAVE REAL DATA OR NOT BEHIND THE REFERENCE, BECAUSE documentREference is returned everytime regardless the data availability
  if (!snapShot.exists) {
    //CREATE USER
    const { displayName, email } = currentUser;
    const createdAt = new Date();

    try {
      //CREATE NEW DOCUMENT IN DB AND POPULATE IT WITH DATA
      await userRef.set({
        displayName,
        createdAt,
        email,
        ...data
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

//GET CURRENT USER
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const authSubscription = firebaseAuth.onAuthStateChanged({
      next: user => {
        //Unsubscribe, once we got a user
        authSubscription();
        resolve(user);
      },
      error: err => {
        reject(err);
      }
    });
  });
};

//GOOGLE AUTH
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ propmt: "select_account" });

export const loginWithGoogle = () =>
  firebaseAuth.signInWithPopup(googleProvider);

export default firebase;

//UTILS
/**
 * GETS TITLE PROCESSES IT AND RETURNS NOUN USED IN TITLE
 * @param {*} title title to process
 * @returns formatted title
 */
const titleFormatter = title => {
  //EXTRACT ONE WORD NAME FROM TITLE (title can be "Exercise mats", but we need only "mats")
  //GET RID OF ALL NON-ALPHANUMERIC CAHRS AND GET ARRAY OF WORDS
  let titleArray = title.replace(/\W_/g, "").split(" ");

  //WE DO NOT KNOW HOW MANY WORDS TITLE WILL HAVE, BUT WE KNOW THAT THE LAST WORD IN TITLE WILL BE THE ROUTE NAME
  let titleName = titleArray[titleArray.length - 1].toLowerCase();

  return titleName;
};

/**
 * Sorts strings in ascending oreder
 * @param {*} val1  string1
 * @param {*} val2  string2
 */
const sortAscendString = (val1, val2) => {
  val1 = titleFormatter(val1);
  val2 = titleFormatter(val2);

  if (val1 < val2) {
    return -1;
  }
  if (val1 > val2) {
    return 1;
  }

  // names must be equal
  return 0;
};
