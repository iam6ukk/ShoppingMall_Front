import React, { Component } from "react";
import MallService from "../service/MallService";
import "bootstrap/dist/css/bootstrap.min.css";

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

  detailBook(bookid) {
    this.props.history.push(`detail/${bookid}`);
  }

  render() {
    return (
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
      </div>
    );
  }
}

export default MainComponent;

// <div className="bookcontainer">
//   {this.state.books.map((book) => (
//     <li key={book.bookid}>
//       <div className="booklist">
//         <div className="bookimg">
//           <img src={surf} alt="img" />
//         </div>
//         <div className="booktitle">
//           <strong>{book.bookname}</strong>
//         </div>
//         <div className="bookinfo">
//           <span>{book.author}</span>
//           <br />
//           <span>{book.publisher}</span>
//           <br />
//           <strong>{book.price}원</strong>
//         </div>
//       </div>
//     </li>
//   ))}
// </div>
// 도서 목록 나열
