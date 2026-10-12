const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

const ID_LIST = [1, 2, 3, 4, 5, 6];

const getIdList = (productList) => productList.map(item => item.id);

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIdList(filterByCategory(products, 'all'))).toEqual(ID_LIST);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIdList(filterByCategory(products, undefined))).toEqual(ID_LIST);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(getIdList(filterByCategory(products, ''))).toEqual(ID_LIST);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(getIdList(filterByCategory(products, 'electronics'))).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(getIdList(filterByCategory(products, 'books'))).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(getIdList(filterByCategory(products, 'home'))).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    expect(getIdList(filterByCategory(products, 'clothes'))).toEqual([])
  });

  test("'toys' возвращает пустой массив", () => {
    expect(getIdList(filterByCategory(products, 'toys'))).toEqual([])
  });

  test("'sports' возвращает пустой массив", () => {
    expect(getIdList(filterByCategory(products, 'sports'))).toEqual([])
  });
});
