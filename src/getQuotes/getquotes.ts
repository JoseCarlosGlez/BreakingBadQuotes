import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Iquote } from "./interface/quote.interface";

export class getQuotesFromApi {
  private axiosConfiguration: AxiosRequestConfig = {
    method: "GET",
    url: "https://www.breakingbadapi.com/api/quotes",
  };
  public async requestData(): Promise<Iquote[]> {
    let listaQuotes: Iquote[] = [];

    await axios(this.axiosConfiguration)
      .then((response) => {
        listaQuotes = response.data;
      })
      .catch(console.log);

    return listaQuotes;
  }
}
