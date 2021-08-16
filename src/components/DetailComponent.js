import React, { Component } from "react";
import MallService from "../service/MallService";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";

// 도서 디테일 페이지
class DetailComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {},
      bookid: this.props.match.params.bookid,
    };
  }

  componentDidMount() {
    MallService.detailBook(this.state.bookid).then((res) => {
      this.setState({ book: res.data });
    });
  }
  // 해당 bookid의 도서 객체 가져옴

  render() {
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={this.state.book.bookurl}
              className="detailimg" //"img-fluid rounded-start"
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
              </div>
              <div className="book-info">
                <br />
                <p className="card-text">{this.state.book.description}</p>
                <span className="card-text">
                  출판사: {this.state.book.publisher}
                </span>{" "}
                |{" "}
                <span className="card-text">
                  출판일: {this.state.book.publishdate}
                </span>
              </div>
              <div className="book-btn">
                <Button variant="outlined" color="primary" className="cart-btn">
                  장바구니
                </Button>
                <Button variant="contained" color="primary" className="buy-btn">
                  구매하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailComponent;
