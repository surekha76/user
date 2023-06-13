import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketServicesService {

  private socket: WebSocket;
  private readonly SERVER_URL = 'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self';
  constructor() { }

  public connect() {
    this.socket = new WebSocket(this.SERVER_URL);

    this.socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    this.socket.onmessage = (event) => {
      console.log('Received message:', event.data);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed with code:', event.code);
    };
  }
  public isclosed(){
    if(this.socket==undefined){
      console.log("Websocket disconnected");
      return false;
    }
  }
  public disconnect() {
    console.log("socket details "+this.socket);
    if (this.socket == undefined){
      return false;
    }else {
      this.socket.close();
      this.socket=null;
      return true;
    }
}
}
