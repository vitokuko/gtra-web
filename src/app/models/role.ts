export class Role {

  constructor(
    public id?: string,
    public name?: string,
    public itemName?: string,
    public description?: string,
    public created?: Date,
    public modified?: Date,
  ) {
      this.created = new Date();
      this.modified = new Date();
    }
}
