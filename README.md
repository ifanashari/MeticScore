# MeticScore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.
This project is created to take the team score of Metic Games.
We are using Realtime Databases on Firebase to create the data structure.

## Development server

If you want to clone. just Clone it and change the Firebase api key. After clone you do npm install to install all of the component we have. Then
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

# System we have

Created by Angular CLI. And Real-Time Databases from [Firebase](https://firebase.google.com/). For auth for admin is using Authentication from Firebase. So we dont need to build back end code for login and logout. 
>You only do this code

```typescript

loginNowWithEmail(loginUser: NgForm){

    this.showLoadingProgress();

    this.firebaseAuth
    .auth.signInWithEmailAndPassword(loginUser.value.email , loginUser.value.password)
    .then(value => {

        this.hideLoadingProgress();
        sessionStorage.setItem('status' , 'logged');
        this.authSer.openGuards();
        this.routers.navigate(['/dashboard']);

    })
    .catch(err => {

        this.authSer.closeGuards();
        this.errForLogin();

    })

}

```

> For the Logout. Just do this

```typescript

logoutFormWebsite(){

    let confhere = confirm("Anda yakin ingin Logout");

    if (confhere == true) {

        this.fireAuthNew.auth.signOut();
        this.routers.navigate(['/']);

    }
    else{

      return false;

    }
    
}

```
