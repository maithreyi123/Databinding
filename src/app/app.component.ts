import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'task1';
 private data='';

 OnClickMe(data)
 {
  console.log(data);
 }
}
