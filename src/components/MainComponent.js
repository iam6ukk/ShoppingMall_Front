import React, { Component } from "react";
import MallService from "../service/MallService";
import "bootstrap/dist/css/bootstrap.min.css";

import surf1 from "../img/bookimg1.jpg";
import surf2 from "../img/bookimg2.jpg";
import surf3 from "../img/bookimg3.jpg";
import surf4 from "../img/bookimg4.jpg";
import surf5 from "../img/bookimg5.jpg";
import surf6 from "../img/bookimg6.jpg";
import surf7 from "../img/bookimg7.jpg";
import surf8 from "../img/bookimg8.jpg";
import surf19 from "../img/bookimg9.jpg";
import surf10 from "../img/bookimg10.jpg";
import surf11 from "../img/bookimg11.jpg";
import surf12 from "../img/bookimg12.jpg";

import FooterLayout from "../laytout/FooterLayout";
import { LoginHeaderLayout, LogoutHeaderLayout } from "../laytout/HeaderLayout";
import LogoutNav from "../laytout/LogoutNav";
import LoginNav from "../laytout/LoginNav";

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [], // 도서 목록 받기 위해 배열로 설정
      pageNum: 1, // 페이지 번호 저장, 초기 1로 설정
      paging: {}, // 페이징 처리 객체
    };
  }

  componentDidMount() {
    MallService.getBooks(this.state.pageNum).then((res) => {
      // 해당 페이지 번호의 도서 목록 받기
      // console.log(res);
      // 데이터 확인
      this.setState({
        books: res.data.list,
        pageNum: res.data.pageNum,
        paging: res.data,
      });
    });
  }
  // getBooks를 호출해 해당 페이지 번호의 데이터 받음

  componentDidUpdate(prevProps, prevState) {
    // 컴포넌트 업데이트 직후에 호출되는 메소드
    if (prevState.pageNum !== this.state.pageNum) {
      // 이전 페이지 번호와 현재 페이지 번호가 다르면
      MallService.getBooks(this.state.pageNum).then((res) => {
        // 현재 페이지 번호로 도서 목록 받기
        // console.log(res.data);
        // 데이터 확인
        this.setState({
          books: res.data.list,
          pageNum: res.data.pageNum,
          paging: res.data,
        });
      });
    }
  }

  detailBook(bookid) {
    this.props.history.push(`detail/${bookid}`);
  }
  // 도서 상세, 해당 bookid의 상세 페이지로 이동

  pageBook(i) {
    console.log("pageNum : " + i);
    this.setState({
      pageNum: i,
    });
    // 전달받은 페이지 번호 => i
  }

  viewPaging() {
    const pageNums = [];
    console.log(this.state.paging);
    // 페이징 객체 확인

    for (
      let i = this.state.paging.navigateFirstPage;
      // i 초기값은 첫 페이지로 설정 (i = 1);
      i <= this.state.paging.navigateLastPage;
      i++ // 마지막 페이지까지 반복하며 1씩 증가
    ) {
      pageNums.push(i);
      // 메인 페이지에 버튼 표시
    }

    return pageNums.map((page) => (
      <li className="page-item" key={page}>
        <a className="page-link" onClick={() => this.pageBook(page)}>
          {page}
        </a>
      </li>
    ));
    // a 태그로 페이지 이동
  }

  // 첫 페이지 이동
  isMoveToFirstPage() {
    if (this.state.pageNum != 1) {
      return (
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => this.pageBook(1)}
            tabIndex="-1"
          >
            First
          </a>
        </li>
        // 첫 페이지라 1로 고정
      );
    }
  }

  // 마지막 페이지 이동
  isMoveToLastPage() {
    if (this.state.pageNum != this.state.paging.navigateLastPage) {
      return (
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => this.pageBook(this.state.paging.navigateLastPage)}
            tabIndex="-1"
          >
            Last({this.state.paging.navigateLastPage})
          </a>
        </li>
        // 페이지가 몇 까지 있는지 출력해줌
      );
    }
  }

  render() {
    return (
      <div>
        {sessionStorage.getItem("LoginUser") == null ? (
          <LogoutNav />
        ) : (
          // 세션의 key값이 null이면 LogoutNav 출력
          <LoginNav />
          // 새션의 key값이 LoginUser이면 LoginNav 출력
        )}

        <div className="container">
          <div className="bookcontainer">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {this.state.books.map((book) => (
                <li key={book.bookid}>
                  <div className="col">
                    <div
                      className="card"
                      onClick={() => this.detailBook(book.bookid)}
                    >
                      <img
                        src={book.bookurl}
                        className="card-img-top"
                        alt="bookimg"
                      />
                      <div className="card-body">
                        <strong className="card-title">{book.bookname}</strong>
                        <br />
                        <span className="card-text">{book.author}</span>
                        <br />
                        <span className="card-text">{book.publisher}</span>
                        <br />
                        <strong className="card-text">{book.price}원</strong>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </div>
            <div className="row">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  {this.isMoveToFirstPage()}
                  {this.viewPaging()}
                  {this.isMoveToLastPage()}
                </ul>
              </nav>
            </div>
            {/* 페이징 출력 */}
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
