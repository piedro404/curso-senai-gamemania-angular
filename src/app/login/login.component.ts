import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public usuario!: string;
  public senha!: string

  constructor(private _loginService: LoginService, private _router: Router){ }

  ngOnInit(): void {

  }

  fazerLogin() {
    this._loginService.login(this.usuario, this.senha);
    this._router.navigate(["/restrito/lista"]);
    
    this._loginService.setMostraMenu(false);
  }

}
