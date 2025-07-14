import type { BaseResponse, Product, ProductsResponse, ProductResponse } from '@/types'
import request from '@/utils/request'

export async function getProducts(page: number): Promise<ProductsResponse> {
  try {
    return request.get('/products', { params: { page } })
  } catch (error) {
    return {
      success: false,
      message: '',
      products: [],
      pagination: {
        total_pages: 0,
        current_page: page,
        has_pre: false,
        has_next: false,
        category: null
      }
    }
  }
}

export async function getProduct(id: Product['id']): Promise<ProductResponse | BaseResponse> {
  try {
    return request.get(`/product/${id}`)
  } catch (error) {
    return error as BaseResponse
  }
}
