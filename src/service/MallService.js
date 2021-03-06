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

  signInUser(logInfo) {
    return axios.post(Mall_API_BASE_URL + "/login", logInfo);
  }
  // 로그인 정보 넘기기

  signUpUser(custInfo) {
    return axios.post(Mall_API_BASE_URL + "/signup", custInfo);
  }
  // 회원 가입
  custIdCheck(custid) {
    return axios.post(Mall_API_BASE_URL + "/signup/idcheck", custid);
  }
  // 아이디 중복 확인

  logOutUser() {
    return axios.get(Mall_API_BASE_URL + "/logout");
  }
  //  로그아웃

  purchaseBook(bookid) {
    return axios.get(Mall_API_BASE_URL + "/purchase" + bookid);
  }
  // 도서 구매 (해당 bookid)
}

export default new MallService();
