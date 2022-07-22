export class FoodItem {
  constructor(
    public name: string,
    public description: string,
    public imgPath: string,
    public price: number,
    public time: string,
    public available: number
  ) {}
}
