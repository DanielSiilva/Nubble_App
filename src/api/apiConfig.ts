import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer OA.qZbVIlMY81OwuCCR9pBc2erJeUuEyrrH4y3Z2yHkgj8oVAn300JNCkTsrqe4',
  },
});
