import type { BaseResponse, CartResponse, CouponResponse, OrderResponse, Product, SumbitOrderResponse, UserData } from '@/types'
import request from '@/utils/request'

export async function addCart(id: Product['id'], qty: number): Promise<boolean> {
  try {
    await request.post('/cart', { data: { product_id: id, qty } })
    return true
  } catch (error) {
    return false
  }
}

export async function getCarts(): Promise<CartResponse> {
  try {
    const res = await request.get('/cart')
    return res.data || {
      carts: [],
      total: 0,
      final_total: 0
    }
  } catch (error) {
    return {
      carts: [],
      total: 0,
      final_total: 0
    }
  }
}

export async function applyCoupon(code: string): Promise<CouponResponse> {
  try {
    return await request.post('/coupon', { data: { code } })
  } catch (error) {
    return error as BaseResponse
  }
}

export async function deleteCart(id: Product['id']): Promise<boolean> {
  try {
    await request.delete(`/cart/${id}`)
    return true
  } catch (error) {
    return false
  }
}

export async function sumbitOrder(userData: UserData): Promise<SumbitOrderResponse> {
  try {
    return await request.post('/order', { data: { ...userData } })
  } catch (error) {
    return error as BaseResponse
  }
}

export async function getOrder(id: string): Promise<OrderResponse> {
  try {
    return await request.get(`/order/${id}`)
  } catch (error) {
    return {
      success: false,
      order: {
        create_at: 0,
        id: '',
        is_paid: false,
        message: '',
        products: {},
        total: 0,
        user: {
          address: '',
          email: '',
          name: '',
          tel: ''
        }
      }
    }
  }
}

export async function payOrder(id: string): Promise<boolean> {
  try {
    await request.post(`/pay/${id}`)
    return true
  } catch (error) {
    return false
  }
}
