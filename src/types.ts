export interface Product {
  category: string
  content: string
  description: string
  id: string
  imageUrl: string
  is_enabled: number
  num: number
  origin_price: number
  price: number
  title: string
  unit: string
}

export interface Pagination {
  total_pages: number
  current_page: number
  has_pre: boolean
  has_next: boolean
  category: null
}

export interface BaseResponse {
  message: string
  success: boolean
}

export interface ProductResponse extends BaseResponse {
  product?: Product
}

export interface ProductsResponse extends BaseResponse {
  products: Product[]
  pagination: Pagination
}

export interface CartResponse {
  carts: CartData[]
  total: number
  final_total: number
}

export interface CartData {
  coupon: Coupon
  id: string
  product: Product
  product_id: string
  qty: number
  final_total?: number
  total?: number
}

export interface Coupon {
  code: string
  due_date: number
  id: string
  is_enabled: number
  percent: number
  title: string
}

export interface CouponResponse extends BaseResponse {
  data?: {
    final_total: number
  }
}

export interface UserData {
  user: User
  message?: string
}

export interface User {
  name: string
  email: string
  tel: string
  address: string
}

export interface SumbitOrderResponse {
  success: boolean
  message: string
  total?: number
  create_at?: number
  orderId?: string
}

export interface OrderProduct {
  final_total: number
  id: string
  product: Product
  product_id: string
  qty: number
  total: number
}

export interface Order {
  create_at: number
  id: string
  is_paid: boolean
  message: string
  products: Record<string, OrderProduct>
  total: number
  user: User
}

export interface OrderResponse {
  success: boolean
  order: Order
}
