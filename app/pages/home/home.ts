import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  getStatus() {
    Facebook.getLoginStatus().then((res)=>{
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",res)
      if(res.status === 'connected'){
        // The user is logged in and has authenticated your app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed request, and the time the access token
        // and signed request each expire
        console.log('getLoginStatus', res.status);

        // Check if we have our user saved
        // var user = UserService.getUser('facebook');

        // if(!user.userID){
        //   getFacebookProfileInfo(success.authResponse)
        //     .then(function(profileInfo) {
        //       // For the purpose of this example I will store user data on local storage
        //       UserService.setUser({
        //         authResponse: success.authResponse,
        //         userID: profileInfo.id,
        //         name: profileInfo.name,
        //         email: profileInfo.email,
        //         picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
        //       });
        //
        //       $state.go('app.home');
        //     }, function(fail){
        //       // Fail get profile info
        //       console.log('profile info fail', fail);
        //     });
        // }else{
        //   $state.go('app.home');
        // }
      } else {
        // If (success.status === 'not_authorized') the user is logged in to Facebook,
        // but has not authenticated your app
        // Else the person is not logged into Facebook,
        // so we're not sure if they are logged into this app or not.

        console.log('getLoginStatus', res.status);

        // $ionicLoading.show({
        //   template: 'Logging in...'
        // });

        // Ask the permissions you need. You can learn more about
        // FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
        Facebook.login(['email', 'public_profile']).then((res)=>{
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",res)
        },(err) => {
          console.log(err);
        });
      }
    },(err) => {
      console.log(err);
    })
  }
  logout() {
    Facebook.logout().then((res)=>{
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",res)
    },(err) => {
      console.log(err);
    });

  }
}
