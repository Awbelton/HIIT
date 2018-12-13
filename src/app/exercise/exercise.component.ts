import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})

export class ExerciseComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  ex = [
    {
        name: 'Run (in place)',
        path: '../assets/img/run-trans.PNG',
        id: 1
    },
    {
        name: 'Jumping Jacks',
        path: '../assets/img/jumping-jacks-trans.PNG',
        id: 2
    },
    {
        name: 'Pushups / Rock Climbers',
        path: '../assets/img/rock-climbers-trans.PNG',
        id: 3
    },
    {
        name: 'Freestyle',
        path: '../assets/img/run-trans.PNG',
        id: 4
    },
    {
        name: 'Burpee',
        path: '../assets/img/burpee-trans.PNG',
        id: 5
    },
    {
        name: 'Plank',
        path: '../assets/img/plank-trans.PNG',
        id: 6
    },
    {
        name: 'Rest',
        path: '../assets/img/rest-trans.PNG',
        id: 7
    }
  ];

  tm;
  timeStart = 0;
  timeEnd = 0;
  num = Math.floor((Math.random() * 10) + 1);
  cnt = 0;
  mode = "Start";
  timer = "00:00:00";
  exercise = "Click Start to Begin";
  exImage;
  difficulty = "easy";
  blink = false;

  trigger(): void {
    if (this.mode === 'Start') {
      var today = new Date();
      this.timeStart = today.getTime();
      this.start();
    } else {
        this.mode = 'Stop';
        this.stop();
    }
  }

  changeDiff(diff) : void {
    this.difficulty = diff;
    console.log('Difficulty: ' + this.difficulty);
  }

  callExercise(s) : void {
    if (s % 30 === 0) this.cnt++;
    this.blink = parseInt(this.timer.slice(6,)) % 30 >= 25;
    if (this.difficulty === 'easy') {
      if (s % 30 === 0 && this.cnt % 2 !== 0) {
        this.getExercise();
      } else if (this.cnt % 2 === 0 && this.cnt !== 0) {
          this.exercise = this.ex[this.ex.length-1].name;
          this.exImage = this.ex[this.ex.length-1].path;
      } else if (s % 30 === 0 && this.cnt === 0) { // initial run only
        this.getExercise();
      }
    } else if (this.difficulty === 'medium') {
      if (s % 30 === 0 && this.cnt % 3 !== 0) {
          this.getExercise();
      } else if (this.cnt % 3 === 0 && this.cnt !== 0) {
        this.exercise = this.ex[this.ex.length-1].name;
        this.exImage = this.ex[this.ex.length-1].path;
      } else if (s % 30 === 0 && this.cnt === 0) { // initial run only
        this.getExercise();
      }
    } else {
      if (s % 30 === 0 && this.cnt % 4 !== 0) {
        this.getExercise();
      } else if (this.cnt % 4 === 0 && this.cnt !== 0) {
        this.exercise = this.ex[this.ex.length-1].name;
        this.exImage = this.ex[this.ex.length-1].path;
      } else if (s % 30 === 0 && this.cnt === 0) { // initial run only
        this.getExercise();
      }
    }
  }

  getExercise() : void {
    this.num = Math.floor((Math.random() * 6));
    this.exercise = this.ex[this.num].name;
    this.exImage = this.ex[this.num].path;
    console.log('another change');
  }

  start() : void {
    this.mode = "Stop";
    var h, m, s, ms, today = new Date();
    this.timeEnd = today.getTime();
    ms = Math.floor((this.timeEnd - this.timeStart) / 1000);
    h = this.check(Math.floor(ms / 3600));
    ms = Math.floor(ms % 3600);
    m = this.check(Math.floor(ms / 60));
    ms = Math.floor(ms % 60);
    s = this.check(Math.floor(ms));
    this.timer = h+":"+m+":"+s;
    this.callExercise(s);
    this.tm = setTimeout(() => { this.start(); }, 1000);
  }

  stop() : void {
    clearTimeout(this.tm);
    console.log("Stopping. . .");
    this.mode = "Start";
    this.cnt = 0;
    this.logData();
  }

  check(i) : void {
    if (i < 10) {
      i = "0" + i
    }
    
    return i;
  }

  logData() : void {

  }
}