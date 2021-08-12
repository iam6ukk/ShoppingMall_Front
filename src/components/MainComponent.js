import React, { Component } from "react";
import MallService from "../service/MallService";
// import "./bookid.jpg/";

// 쇼핑몰 메인 페이지
class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
    // state 설정
  }

  componentDidMount() {
    MallService.getBooks().then((res) => {
      console.log(res.data);
      // 데이터 확인
      this.setState({
        books: res.data,
      });
    });
  }

  render() {
    return (
      <div className="bookcomponent">
        {this.state.books.map((book) => (
          <ul key={book.bookid}>
            <li>
              <div className="booklist">
                <div className="bookimage">
                  {/* <img src="img/bookid1" /> */}
                </div>
                <div className="booktitle">
                  <strong>{book.bookname}</strong>
                </div>
                <div className="bookinfo">
                  <span>{book.author}</span>
                  <br />
                  <span>{book.publisher}</span>
                </div>
                <div className="bookprice">
                  <strong>{book.price}원</strong>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
      // 도서 목록 나열
    );
  }
}

export default MainComponent;
