

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
    const res = await request(app).put('/books').send(objectBookPostMock);
    expect(res.statusCode).toBe(404);
  });




  test('responds to PUT Update Error 404 /books', async () => {
    const res = await request(app).put('/books');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(404);
  });
  
  test('responds to PUT Update Error 500 /books', async () => {
    const res = await request(app).put(`/books/123`)
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(400);
  });
  test('responds to PUT Update Success /books', async () => {
    const res = await request(app).put(`/books/${idBook}`)
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });




  