import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onClickBasic(): void {
    this.http.get(`http://jsonplaceholder.typicode.com/todos`).subscribe(todos => {
      console.log(todos);
    });
  }
}
