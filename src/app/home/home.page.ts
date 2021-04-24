import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';


import 'juliodev-plugin-contact';
const { ContactPlugin } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }
  contacts:any = [];

  async loadContact() {
    this.contacts = (await ContactPlugin.getContacts("test")).results;
    console.log("My contacts: ", this.contacts)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadContact()
  }

  async showContact(contact) {
    alert(JSON.stringify(contact))
  }
}
