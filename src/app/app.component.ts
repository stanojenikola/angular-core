import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-core';
  numbers = [ 2,3,4,5];
  numbersObs = of([ 2,3,4,5]);
  response!: Observable<any> ;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      this.response = this.http.get('http://localhost:8080/user/username', {responseType: 'text'})
  }
}
