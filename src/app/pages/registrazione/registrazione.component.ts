import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../service/firebase.service";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {


  Roles: any = ['Admin', 'Author', 'Reader'];
  email = '';
  password = '';
  constructor(public firebase: FirebaseService) { }

  ngOnInit(): void {
  }

}
