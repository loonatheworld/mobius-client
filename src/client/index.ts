import axios, { AxiosInstance } from 'axios';

import type { UnifiedSearchResponse } from '../types/responses';

export class MobiusClient {
  public http: AxiosInstance;

  constructor({ url }: { url: string }) {
    this.http = axios.create({
      baseURL: url
    });
  }

  public async unifiedSearch(query: string): Promise<UnifiedSearchResponse> {
    const { data } = await this.http.get<UnifiedSearchResponse>('/search', {
      params: {
        q: query
      }
    });

    return data;
  }
}
