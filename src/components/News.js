import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import "../index.css";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    document.title = `Leaf India-${
      this.props.category === "general"
        ? "Top News Headlines"
        : this.capitalizeFirstLetter(this.props.category)
    }`;
  }

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  async componentDidMount() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&language=en&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  // handlePrevClick= async () => {
  //   this.setState({loading:true})
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&language=en&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
  //   let data= await fetch(url)
  //   let parsedData=await data.json()
  //   this.setState({page:this.state.page-1,articles:parsedData.articles,loading:false})
  // }

  // handleNextClick= async () => {
  //   this.setState({loading:true})
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&language=en&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
  //   let data= await fetch(url)
  //   let parsedData=await data.json()
  //   this.setState({page:this.state.page+1,articles:parsedData.articles,loading:false})
  // }

  fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&language=en&category=${this.props.category}&apiKey=${
      process.env.REACT_APP_API_KEY
    }&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <>
        <h2 className="headingMain text-center">
          Leaf India-
          {this.props.category === "general"
            ? "Top News Headlines"
            : this.capitalizeFirstLetter(this.props.category)}
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>
                Yay! You have seen it all. Kindly Support the creator if you
                enjoyed it by sharing it with your family and friends.
              </b>
            </p>
          }
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>

            {/* div className='text-center mx-auto' */}

            {/* <div className="container d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} className="btn btn-dark buttons" onClick={this.handlePrevClick}>&laquo; Prev</button>
      <button type="button" disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark buttons" onClick={this.handleNextClick}>Next &raquo;</button>
      </div> */}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
