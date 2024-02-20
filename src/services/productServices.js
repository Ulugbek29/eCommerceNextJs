import request from "./httpRequest";


const productsService = {
  getList: (limit=100, inputValue) => request.get(`/products/search?q=${inputValue}&limit=${limit}`),
  getById: (id, params) => request.get(`/products/${id}`, { params }),
  create: (data) => request.post("/products", data),
  update: (data) => request.put("/products", data),
  delete: (id) => request.delete(`/products/${id}`),
};

export default productsService;