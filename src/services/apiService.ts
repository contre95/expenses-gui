import axios from "axios";

interface ServerResponse {
  data: CategoryIface;
}

interface CategoryIface {
  name: string;
  value: string;
  id: number;
}

export class ApiService {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  getCategories = async () => {
    const resp = await fetch(this.url).then((val) => val.json()).catch(err => err);
    console.log(resp);
    return resp;
  };
}
