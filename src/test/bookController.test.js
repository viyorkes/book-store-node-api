import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import app from '../app.js';


let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /editoras', () => {
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
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });
  




test('responds to GET /books', async () => {
  const res = await request(app).get('/books');
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(200);
  expect(objectBookMock).toEqual(objectBookMock);
});


test('responds to POST Error /books', async () => {
  const res = await request(app).post('/books');
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(500);
  expect(objectBookPostMock).toEqual(objectBookPostMock);
});

test('responds to POST /books', async () => {
  const res = await request(app).post('/books').send(objectBookPostMock);
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(201);
 // expect(objectBookPostMock).toEqual(objectBookPostMock);
});


test('responds to PUT Update Error 404 /books', async () => {
  const res = await request(app).put('/books');
  expect(res.header['content-type']).toBe('text/html; charset=utf-8');
  expect(res.statusCode).toBe(404);
});


test('responds to PUT Update Error 500 /books', async () => {
  const res = await request(app).put(`/books/123`)
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(500);
});

test('responds to PUT Update Success /books', async () => {
  const res = await request(app).put(`/books/${idBook}`)
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(200);
});


test('response to DELETE Error 500 /books', async () => {
  const res = await request(app).delete(`/books/123`)
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(500);
});

test('response to DELETE Success /books', async () => {
  const res = await request(app).delete(`/books/${idBook}`)
  expect(res.header['content-type']).toBe('application/json; charset=utf-8');
  expect(res.statusCode).toBe(200);
});


});


  // it('Must instantiate a new book', () => {
  //   const bookController = new BookController(objectBook.title);

  //   expect(bookController).toEqual(
  //     expect.objectContaining(objectBook),
  //   );
  // });

  // it.skip('Deve salvar editora no BD', () => {
  //   const editora = new Editora(objetoEditora);

  //   editora.salvar().then((dados) => {
  //     expect(dados.nome).toBe('CDC');
  //   });
  // });

  // it.skip('Deve salvar no BD usando a sintaxe moderna', async () => {
  //   const editora = new Editora(objetoEditora);

  //   const dados = await editora.salvar();

  //   const retornado = await Editora.pegarPeloId(dados.id);

  //   expect(retornado).toEqual(
  //     expect.objectContaining({
  //       id: expect.any(Number),
  //       ...objetoEditora,
  //       created_at: expect.any(String),
  //       updated_at: expect.any(String),
  //     }),
  //   );
  // });

  // it('Deve fazer uma chamada simulada ao BD', () => {
  //   const editora = new Editora(objetoEditora);

  //   editora.salvar = jest.fn().mockReturnValue({
  //     id: 10,
  //     nome: 'CDC',
  //     cidade: 'Sao Paulo',
  //     email: 'c@c.com',
  //     created_at: '2022-10-01',
  //     updated_at: '2022-10-01',
  //   });

  //   const retorno = editora.salvar();

  //   expect(retorno).toEqual(
  //     expect.objectContaining({
  //       id: expect.any(Number),
  //       ...objetoEditora,
  //       created_at: expect.any(String),
  //       updated_at: expect.any(String),
  //     }),
  //   );
  // });
//});