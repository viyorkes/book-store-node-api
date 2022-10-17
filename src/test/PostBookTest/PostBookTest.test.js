

import {app} from'../../app';
import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';


let server;
beforeEach(() => {
  const port = 3000;
});



  const objectBookPostMock = {
    title: 'Test Book',
    author: ' Author Test',
    publisher: 'publisher test',
    numberOfPages: 21,
  };


  const idBook = "633e4d0dc61dcfc95031302b"
  

  test('responds to POST /books', async () => {
    const res = await request(app).post('/books').send(objectBookPostMock);
    expect(res.statusCode).toBe(201);
  });




  