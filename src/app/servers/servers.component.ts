import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created till now';
  serverName ='';
  serverCreated=false;
  servers = ['Test Server','Test Server 2'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },3000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus ="Server created successfully with Name: "+this.serverName;
  }
  onUpdateServerName(event){
    this.serverName = event.target.value;
    // console.log(this.serverName)
  }


}
