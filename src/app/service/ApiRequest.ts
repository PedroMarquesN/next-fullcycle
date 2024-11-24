const API_URL = process.env.API_URL || 'http://localhost:3333';

export interface ApiQueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  limit?: number;
  rating_like?: string;
}

export const defaultOptions: RequestOptions = {
  page: 1,
  limit: 10,
};

export function buildQueryString(params: ApiQueryParams) {
  const query = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => [key, encodeURIComponent(String(value))]);

  return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
}

export async function ApiRequest(
  endpoint: string,
  query: ApiQueryParams = {},
  options: RequestOptions = {}
) {
  const mergedOptions: RequestOptions = { ...defaultOptions, ...options };
  const queryString: string = buildQueryString({ ...query, ...mergedOptions });
  try {
    const response = await fetch(`${API_URL}/${endpoint}${queryString}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao fazer a requisição');
  }
}

// export class ApiRequest {
//   static async get(path: string) {
//     const response = await fetch(`${API_URL}${path}`);
//     return await response.json();
//   }

//   static async post(path: string, data: Record<string, unknown>) {
//     const response = await fetch(`${API_URL}${path}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//     return await response.json();
//   }
// }
