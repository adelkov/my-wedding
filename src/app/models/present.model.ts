export class Present {
  id: number;
  name: string;
  link: string;
  isTaken: boolean;
  owner: string;

  constructor(id: number, name: string, link: string, isTaken: boolean, owner: string) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.isTaken = isTaken;
    this.owner = owner;
  }
}
