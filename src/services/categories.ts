interface CategoryIface {
  text: string;
  value: string;
  id: number;
}
export class Categories {
  static getCategories(): CategoryIface[] {
    return [
      {
        text: "First",
        value: "1",
        id: 1,
      },
      {
        text: "Second",
        value: "2",
        id: 2,
      },
      {
        text: "Also First but with diffrent text",
        value: "3",
        id: 3,
      },
    ];
  }
}
