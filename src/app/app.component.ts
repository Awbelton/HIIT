import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function() {
      $('.container').hide();
      $('.btn-begin').click(function(ev) {
          $('.directions').hide();
          $('.container').fadeIn(1000);
      });
    });
  }
  
  title = 'HIIT Helper';
  desc = 'Welcome to the simple High Intensity Interval Training assistant. This tool assists in your training by giving exercise ideas, keeping track of times, and keeping a log of your previous sessions.';
}

$(document).ready(function() {
  $('.container').hide();
  $('.btn-begin').click(function(ev) {
      $('.directions').hide();
      $('.container').fadeIn(1000);
  });
});