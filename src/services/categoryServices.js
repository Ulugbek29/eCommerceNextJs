import request from "./httpRequest";


const categoryService = {
  getList: (limit=6) => request.get(`/products/categories?limit=${limit}`),
  getProductsCategory: (limit=6,categ) => request.get(`/products/category/${categ}?limit=${limit}`),
  getById: (id, params) => request.get(`/products/${id}`, { params }),
  create: (data) => request.post("/products", data),
  update: (data) => request.put("/products", data),
  delete: (id) => request.delete(`/products/${id}`),
};

export default categoryService