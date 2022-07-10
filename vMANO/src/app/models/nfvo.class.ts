export class Nfvo {
  private _name: string = '';
  private _chip: string = '';
  private _drive: string = '';
  private _ram: string = '';
  private _monitor: string = '';

  get name (): string {
    return this._name;
  }
  set name (value: string) {
    this._name = value;
  }

  get chip (): string {
    return this._chip;
  }
  set chip (value: string) {
    this._chip = value;
  }

  get drive (): string {
    return this._drive;
  }
  set drive (value: string) {
    this._drive = value;
  }

  get ram (): string {
    return this._ram;
  }
  set ram (value: string) {
    this._ram = value;
  }

  get monitor (): string {
    return this._monitor;
  }
  set monitor (value: string) {
    this._monitor = value;
  }
}
