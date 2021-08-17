import axios from "axios";

const Mall_API_BASE_URL = "http://localhost:8080/api/books";

class MallService {
  getBooks(pageNum) {
    return axios.get(Mall_API_BASE_URL + "?pageNum=" + pageNum);
  }
  // 도서 목록 가져오기 + 페이징

  detailBook(bookid) {
    return axios.get(Mall_API_BASE_URL + "/" + bookid);
  }
  // 해당 도서의 디테일 가져오기

  signInUser(body) {
    return axios.post(Mall_API_BASE_URL, body);
  }
  // 로그인 정보 넘기기
}

export default new MallService();
