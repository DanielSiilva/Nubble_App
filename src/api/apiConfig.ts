import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer MQ.o6klB5ag2a0xzff6e_Ki-osq1qouTtApTo2mrnoBJeeWSfgjwa4tXJ49IEKc',
  },
});
