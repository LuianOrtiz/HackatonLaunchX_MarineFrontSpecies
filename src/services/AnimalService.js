import http from "../http-common";

class AnimalService {
  getAll() {
    return http.get("/animal");
  }
  /*
  get(id) {
    return http.get(`/explorers/${id}`);
  }
  */
  create(data) {
    return http.post("/animal", data);
  }
  /*

  update(id, data) {
    return http.put(`/explorers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/explorers/${id}`);
  }
  */
}

export default new AnimalService();