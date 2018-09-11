export class Marker {
  private _lat: number;
  private _lng: number;
  private _label: string;
  private _draggable: boolean;
  private _isOpen: boolean;


  constructor(lat: number, lng: number, label: string, draggable: boolean, isOpen: boolean) {
    this._lat = lat;
    this._lng = lng;
    this._label = label;
    this._draggable = draggable;
    this._isOpen = isOpen;
  }


  get lat(): number {
    return this._lat;
  }

  set lat(value: number) {
    this._lat = value;
  }

  get lng(): number {
    return this._lng;
  }

  set lng(value: number) {
    this._lng = value;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get draggable(): boolean {
    return this._draggable;
  }

  set draggable(value: boolean) {
    this._draggable = value;
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  set isOpen(value: boolean) {
    this._isOpen = value;
  }
}
