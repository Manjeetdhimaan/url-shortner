import { EventEmitter } from "@angular/core";

export class Emitters {
  static authEmitter = new EventEmitter<boolean>(false);
  static toastEmitter = new EventEmitter<{title: string,state: string,message: string}>();
  static modelConfirmEmitter = new EventEmitter<null>();
  static modelLanchEmitter = new EventEmitter<null>();
}
