export class OrderItem {
  constructor(
    public name: string,
    public imgPath: string,
    public quantity: number,
    public price: number,
    public status: string
  ) {}
}
