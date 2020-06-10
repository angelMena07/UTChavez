import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoconferencia',
  templateUrl: './videoconferencia.component.html',
  styleUrls: ['./videoconferencia.component.css']
})
export class VideoconferenciaComponent implements OnInit {
  id = 'Xzayjva3Zls';
  playerVars = {
    cc_lang_pref: 'en'
  };

  private player;
  private ytEvent;
  constructor() { }
  onStateChange(event) {
    this.ytEvent = event.data;
  }

  ngOnInit() {
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

}
