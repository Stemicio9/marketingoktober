import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

export interface User{
  uid:string;
  email:string;
  displayName:string;
  photoURL:string;
  emailVerified:boolean;
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  app:any;
  analytics:any;
  userData:any;

  constructor(public afs:AngularFirestore, public afAuth:AngularFireAuth,public router:Router, public ngZone:NgZone, public firestore: AngularFirestore) {


    //@todo salvare utente in local storage
    this.afAuth.authState.subscribe(
        user=>{
          if(user){
            this.userData = user;
            localStorage.setItem('user',JSON.stringify(this.userData));
          } else {
            localStorage.setItem('user', 'null');
          }
        }
    )
    // this.app = initializeApp(this.firebaseConfig);
    // this.analytics = getAnalytics(this.app);
  }
  signIn(email:string, password:string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(
        result => {
          console.log('UTENTE');
          console.log(result);
          this.userData = result.user;
          localStorage.setItem('user',JSON.stringify(this.userData));
          this.ngZone.run(() => {
            this.router.navigate(['/admin/spazipubblicitari']);
          });
          this.setUserData(result.user);
        }
    )
        .catch(error => {
          console.log('Stampo errore');
          console.log(error.code)
          return error.code;
        })
  }
  SendVerificationEmail(){
    return this.afAuth.currentUser.then(
        (user:any)=>{
          user.sendEmailVerification()
        }
    )
        .then(()=>{
          //@todo navigazione verso pagina recupero password
        })
  }
  setUserData(user:any){
    const userRef: AngularFirestoreDocument<any>=this.afs.doc('users/${user.uid}');
    this.userData = {
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoURL:user.photoURL,
      emailVerified:user.emailVerified,
    }
    return userRef.set(this.userData, {merge:true});
  }
  signOut(){
    return this.afAuth.signOut().then(()=>{
      this.userData=undefined;
      return this.afAuth.signOut().then(
          () =>{
            localStorage.removeItem('user');
            this.router.navigate(['/login']);
          }
      )
    })
  }
  get isLoggedIn() : boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user != null;

  }
  signUp(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password).then(
        result=>{
          console.log(result);
          this.SendVerificationEmail();
          this.setUserData(result.user);
          this.firestore.collection('user').add({uid: result.user?.uid}).catch(
              error =>{
                console.log(error)
              }
          )
        })
        .catch(error => {
          console.log(error)
        })
  }
}
