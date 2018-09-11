import {Wedding} from "./wedding.model";

export class User {
  private _email: string;
  private _myWeddings: Wedding[];
  private _guestWeddings: Wedding[];
  private _id: number;


  constructor(){
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get myWeddings(): Wedding[] {
    return this._myWeddings;
  }

  set myWeddings(value: Wedding[]) {
    this._myWeddings = value;
  }

  get guestWeddings(): Wedding[] {
    return this._guestWeddings;
  }

  set guestWeddings(value: Wedding[]) {
    this._guestWeddings = value;
  }
}

