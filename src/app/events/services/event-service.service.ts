import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor() { }

  public getAllEvents() {
    console.log("we are getting all the events!!!");
  }

  public getOneEvent(idx: string) {
    console.log("lets get only one event!!!");
  }

  public newEvent(event) {
    console.log("lets add a new event!!!");
  }

  public updateEvent(idx: string) {
    console.log("lets update this even!!!");
  }

  public deleteEvent(idx: string) {
    console.log("lets delete this fucking event!!!");
  }
}
