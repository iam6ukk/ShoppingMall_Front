import axios from "axios";

const Mall_API_BASE_URL = "http://localhost:8080/api/books";

class MallService {
  getBooks() {
    return axios.get(Mall_API_BASE_URL);
  }
  // 도서 목록 가져오기

  detailBook(bookid) {
    return axios.get(Mall_API_BASE_URL + "/" + bookid);
  }
  // 해당 도서의 디테일 가져오기
}

export default new MallService();
