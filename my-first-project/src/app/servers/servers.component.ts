import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewserver=false;
  servercreationstatus='no server was created';

  constructor() {
    setTimeout(()=>{
      this.allownewserver=true;
    },2000);
  }

  ngOnInit(): void {
  }
  oncreateserver(){
    this.servercreationstatus='server was created';
  }

}
