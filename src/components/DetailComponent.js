import React, { Component } from "react";
import MallService from "../service/MallService";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import LogoutNav from "../laytout/LogoutNav";
import LoginNav from "../laytout/LoginNav";
import { Typography } from "@material-ui/core";

class DetailComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      bookid: this.props.match.params.bookid,
      count: 1,
    };
  }

  componentDidMount() {
    MallService.detailBook(this.state.bookid).then((res) => {
      // 해당 booid의 도서 정보 받기
      this.setState({ book: res.data });
      console.log(res);
      // 데이터 확인
    });
  }

  onIncrease() {
    this.setState({
      count: (this.state.count += 1),
    });
  }
  onDecrease() {
    this.setState({
      count: (this.state.count -= 1),
    });
  }

  goCart() {
    this.props.history.push("/cart");
  }

  goPurchase(bookid) {
    this.props.history.push(`/purchase/${bookid}`);
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
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={this.state.book.bookurl}
                  className="detailimg"
                  alt="bookimg"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="book-title">
                    <strong className="card-title">
                      {this.state.book.bookname}
                    </strong>{" "}
                    <span>{this.state.book.author}</span>
                    <br />
                    <span className="card-text">
                      출판사: {this.state.book.publisher}
                    </span>{" "}
                    |{" "}
                    <span className="card-text">
                      출판일: {this.state.book.publishdate}
                    </span>
                    <br />
                    <strong>{this.state.book.price}원</strong>
                    <hr />
                  </div>
                  <div className="book-info">
                    <br />
                    <p className="card-text">{this.state.book.description}</p>
                  </div>
                  <div className="count">
                    <Typography variant="h6">{this.state.count}</Typography>
                    <Button
                      variant="contained"
                      onClick={() => this.onDecrease()}
                    >
                      -1
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => this.onIncrease()}
                    >
                      +1
                    </Button>
                    {/* 상품 카운트 버튼 구현 */}
                  </div>
                  <div className="book-btn">
                    <Button variant="outlined" color="primary">
                      장바구니
                    </Button>{" "}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.goPurchase()}
                    >
                      구매하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailComponent;
