const API_URL = 'http://localhost:3333';



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

export async function ApiRequest(endpoint: string, query: ApiQueryParams = {}, options: RequestOptions = {}) {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, options }),
        });
        return await response.json();
    }
    catch (error) {
        console.error(error);
        return null;
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