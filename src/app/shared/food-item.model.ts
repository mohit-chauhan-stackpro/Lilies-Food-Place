export class FoodItem {
  constructor(
    public name: string,
    public description: string,
    public imgPath: string,
    public price: string,
    public time: string,
    public available: number
  ) {}
}
