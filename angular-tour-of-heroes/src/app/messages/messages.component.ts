import{Component, OnInit}from '@angular/core';
import {MessageService}from '../message.service';
import {AES, enc}from 'crypto-js';

@Component({
selector: 'app-messages',
templateUrl: './messages.component.html',
styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

constructor(public messageService: MessageService) {}

  ngOnInit() {

    const envryptedString = AES.encrypt('Hello All','MYKEY4DEMO');
    sessionStorage.setItem('encryptedHello', envryptedString.toString());

    const decrypted = AES.decrypt(sessionStorage.getItem('encryptedHello'), 'MYKEY4DEMO');
    const decryptedString = decrypted.toString(enc.Utf8);
    sessionStorage.setItem('decryptedHello', decryptedString);

    let obj = {"studentName":"John Smith","studentId":"CSC001"};
    const envryptedObject = AES.encrypt(JSON.stringify(obj),'MYKEY4DEMO');
    sessionStorage.setItem('envryptedObject', envryptedObject.toString());

    const decrypted2 = AES.decrypt(sessionStorage.getItem('envryptedObject'), 'MYKEY4DEMO');
    const decryptedObject = decrypted2.toString(enc.Utf8);
    sessionStorage.setItem('decryptedObject', decryptedObject);

  }

}
