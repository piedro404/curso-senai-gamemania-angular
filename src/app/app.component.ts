import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Game Mania';
  mostrarMenu: Boolean = true;

  constructor(private _loginService: LoginService){ }

  ngOnInit(): void {
    this._loginService.getMostraMenu().subscribe(
      res => {
        this.mostrarMenu = res;
      }
    )
  }

  ngOnDestroy() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }

}
