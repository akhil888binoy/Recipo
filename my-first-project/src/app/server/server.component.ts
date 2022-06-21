import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { withLatestFrom } from "rxjs";
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles : ['.online {color: white ;}']
})
export class ServerComponent{
    serverId:number  = 10;
    serverStatus: string='offline';

    constructor(){
        this.serverStatus=Math.random()>0.5 ? 'online':'offline';
    }

    getserverStatus(){
        return this.serverStatus;
    }
    getcolor(){
        return this.serverStatus=='online'? 'green' : 'red';
    }
}