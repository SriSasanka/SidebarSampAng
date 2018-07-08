import {Component, OnInit} from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    $('#sidebar-tg').click(function() {
      $('.sidebar-container').toggleClass('in');
      // $('.toggle_collapse').show();
  });
  }
}
