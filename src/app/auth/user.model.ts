export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _torkenExpirationDate: Date
  ) {}

  get token() {
    if(!this._torkenExpirationDate || new Date() > this._torkenExpirationDate) {

      return null;
    }
    return this._token;
  }
}
