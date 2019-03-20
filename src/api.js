import axios from 'axios'

const userRequest = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/`
})
const adminRequest = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/`
})

//前台商品
export const apiUserProducts = page => userRequest.get(`products?page=${page}`)
export const apiUserProduct = id => userRequest.get(`product/${id}`)
//訂單
export const apiOrderCreate = data => userRequest.post(`order`, data)
export const apiOrderGet = id => userRequest.get(`order/${id}`)
export const apiOrderPay = id => userRequest.post(`pay/${id}`, id)
//購物車
export const apiCartGet = () => userRequest.get(`cart`)
export const apiCartAdd = data => userRequest.post(`cart`, data)
export const apiCartRemove = id => userRequest.delete(`cart/${id}`)
//優惠券
export const apiCouponApply = data => userRequest.post(`coupon`, data)

//後台商品
export const apiAdminProductsGet = page => adminRequest.get(`products?page=${page}`)
export const apiAdminProductAdd = data => adminRequest.post(`product`, data)
export const apiAdminProductEdit = (id, data) => adminRequest.put(`product/${id}`, data)
export const apiAdminProductRemove = id => adminRequest.delete(`product/${id}`)
//後台訂單
export const apiAdminOrdersGet = page => adminRequest.get(`orders?page=${page}`)
export const apiAdminOrderEdit = (id, data) => adminRequest.put(`order/${id}`, data)
//後台優惠券
export const apiAdminCouponsGet = page => adminRequest.get(`coupons?page=${page}`)
export const apiAdminCouponAdd = data => adminRequest.post(`coupon`, data)
export const apiAdminCouponEdit = (id, data) => adminRequest.put(`coupon/${id}`, data)
export const apiAdminCouponRemove = id => adminRequest.delete(`coupon/${id}`)
