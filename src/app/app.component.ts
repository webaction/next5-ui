import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

class Race {
  name: string;
  type: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _to: any;

  title = 'app';
  races: Race[];
  text: any = {
    'Weeks': 'Weeks',
    'Days': 'Days', 'Hours': 'Hours',
    'Minutes': 'Minutes', 'Seconds': 'Seconds',
    'MilliSeconds': 'MilliSeconds'
  };
  dateTime: any;

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.races = [];
    this.updateRaces();
    // this.dateTime = moment().from();
    setInterval(() => this.updateRaces(), 1000 * 30);
  }

  updateRaces(): void {
    this.http.get('http://localhost:9999/api/races').toPromise().then(result => {
      this.races = result.json();
    });
  }
}
