import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  GOOGLE_LOGIN_START,
  EMAIL_LOGIN_START,
  CHECK_USER_SESSION,
  LOG_OUT_START,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS
} from "./user.types";
import {
  googleProvider,
  firebaseAuth,
  addUserProfile,
  getCurrentUser
} from "../../firebase/firebase.helpers";
import {
  loginSuccess,
  loginFail,
  logOutFail,
  logOutSuccess,
  registerFail,
  registerSuccess
} from "./user.actions";

export function* getUserSnapshot(user, additionalData) {
  try {
    //TRY CREATE USER
    const userToCreate = yield call(addUserProfile, user, additionalData);

    //GET USER SNAPSHOT
    const userSnapshot = yield userToCreate.get();

    //EMIT ACTION TO REDUCER
    yield put(loginSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    //EMIT ACTION TO REDUCER
    yield put(loginFail(error.message));
  }
}

export function* loginWithGoogle() {
  //TRY LOGIN WITH GOOGLE
  try {
    //CHECK USER
    const userRef = yield firebaseAuth.signInWithPopup(googleProvider);
    const { user } = userRef;
    yield getUserSnapshot(user);
  } catch (error) {
    //EMIT ACTION TO REDUCER
    yield put(loginFail(error.message));
  }
}

export function* onGoogleLoginStart() {
  yield takeLatest(GOOGLE_LOGIN_START, loginWithGoogle);
}

export function* loginWithEmail({ payload: { email, password } }) {
  try {
    const userRef = yield firebaseAuth.signInWithEmailAndPassword(
      email,
      password
    );

    const { user } = userRef;

    yield getUserSnapshot(user);
  } catch (error) {
    yield put(loginFail(error.message));
  }
}

//COMPONENT CALLS ACTION THAT HAS EMAIL_LOGIN_START TYPE.
//SAGA LISTEN TO SUCH AN AVENT AND ONCE THIS IS CALLED SAGA TAKES THE WHOLE ACTION OBJECT AND PASSES TO SAGA'S METHODS
export function* onEmailLoginStart() {
  //THIS WILL CATCH ENTIRE ACTION AND PAS {payload and type to loginWithEmail}
  yield takeLatest(EMAIL_LOGIN_START, loginWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();

    if (!user) return;

    yield getUserSnapshot(user);
  } catch (error) {
    yield put(loginFail(error));
  }
}

//CHECK USER SESSION
export function* checkUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* logoutUser() {
  try {
    yield firebaseAuth.signOut();
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFail(error.message));
  }
}

export function* onLogoutStart() {
  yield takeLatest(LOG_OUT_START, logoutUser);
}

export function* registerUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    yield put(registerSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(registerFail(error.message));
  }
}

export function* onRegisterUserStart() {
  yield takeLatest(REGISTER_USER_START, registerUser);
}

export function* loginRegisteredUser({ payload: { user, additionalData } }) {
  yield getUserSnapshot(user, additionalData);
}

export function* onRegisterSuccessLoginUser() {
  yield takeLatest(REGISTER_USER_SUCCESS, loginRegisteredUser);
}

//SO WE CAN PASS ALL SAGAS TO ROOT-SAGA
export function* userSaga() {
  //Instantiate all other sagas we will call so they listen for event
  yield all([
    call(onGoogleLoginStart),
    call(onEmailLoginStart),
    call(checkUserSession),
    call(onLogoutStart),
    call(onRegisterUserStart),
    call(onRegisterSuccessLoginUser)
  ]);
}
