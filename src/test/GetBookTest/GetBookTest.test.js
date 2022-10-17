

import {app} from'../../app';
import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import express from 'express'


let server;
beforeEach(() => {
  const port = 3000;
});


describe('GET  /books', () => {
  const objectBookMock = [{
    title: 'Test Book',
    author: ' Author Test',
    publisher: 'publisher test',
    numberOfPages: 21,
  }];



  const objectBookPostMock = {
    title: 'Test Book',
    author: ' Author Test',
    publisher: 'publisher test',
    numberOfPages: 21,
  };


  const idBook = "633e4d0dc61dcfc95031302b"
  


test('responds to GET /books', async () => {
  const res = await request(app).get('/books');
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(200);
  expect(objectBookMock).toEqual(objectBookMock);
});

test('responds to GET /books', async () => {
  const res = await request(app).get('/books');
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(200);
  expect(objectBookMock).toEqual(objectBookMock);
});


});
