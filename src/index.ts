import { getQuotesFromApi } from "./getQuotes/getquotes";

const getQuoteInstance = new getQuotesFromApi();

getQuoteInstance.requestData();
