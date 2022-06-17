import {Category} from '../interfaces'

export async function getCategories(): Promise<Category[]> {
  try {
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const result = await fetch(endPoint);
    const objectResult = await result.json();
    return objectResult;
  } catch (error) {
    console.log('getCategories', error)
    throw new Error('Erro ao conseguir categorias')
  }
}

export async function getProductsFromCategoryAndQuery(categoryId:string, query:string):Promise<any> {
  let result:any;
  try {
    if (!categoryId) {
      result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=${query}`);
    } else {
      result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    }
    const obecjtResult = await result.json();
    return obecjtResult;
  } catch (error) {
    console.log('getProductsFromCategoryAndQuery', error)
    return error;
  }
}

//debounce query
//SCROLL INFINITO
//REQUISIÇÕES