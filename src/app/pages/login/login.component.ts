import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseService} from "../../service/firebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  messaggio = '';

  constructor(public firebase: FirebaseService, public router : Router) { }

  ngOnInit(): void {
  }

  mostrareMessaggio(): boolean{
    if(this.messaggio === ''){
      return false;
    }
    return true;
  }

  async login(){
    //   var err = await this.firebase.signIn(this.email, this.password);
    //  this.messaggio = 'Credenziali errate!';
    this.router.navigate(['/admin/spazipubblicitari']);
  }

}
