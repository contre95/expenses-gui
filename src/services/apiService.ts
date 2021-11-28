import { APIResponse } from "@/types/external";
export class ApiService {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  getCategories = async (): Promise<APIResponse> => {
    const resp = await fetch(this.url)
      .then((val) => val.json())
      .catch((err) => err);
    return resp;
  };
}
