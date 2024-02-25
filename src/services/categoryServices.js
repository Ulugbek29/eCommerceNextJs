import request from "./httpRequest";


const categoryService = {
  getList: (limit=20) => request.get(`/products/categories?limit=${limit}`),
  getProductsCategory: (categ,limit=20) => request.get(`/products/category/${categ}?limit=${limit}`),
  getById: (id, params) => request.get(`/products/${id}`, { params }),
  create: (data) => request.post("/products", data),
  update: (data) => request.put("/products", data),
  delete: (id) => request.delete(`/products/${id}`),
};

export default categoryService