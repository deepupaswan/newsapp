import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner.js";
import PropTypes from 'prop-types';


export class News extends Component {
  static defaultProps= {
    country:"in",
    pagesize: 6,
    category:"general"

  }
  static propTypes= {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category:PropTypes.string

  }
  constructor() {
    super();
    this.state = {
      articles:[],
      loading: false,
      page: 1,
      totalresults:0
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
     this.setState({loading: true})
      let data= await fetch(url);
      let parsedData= await data.json();

      this.setState({
          articles: parsedData.articles,
          totalresults: parsedData.totalResults,
          loading: false
          
      })

  }
  handleprevClick= async ()=>{
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({
        articles: parsedData.articles,
        page:this.state.page-1,
        loading:false
    })

  }
   handleNextClick= async ()=>{
      // if(   this.state.page> Math.ceil((this.state.totalresults/20))){
        let url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
        this.setState({loading: true});
        let data= await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData.articles.url);
        this.setState({
            articles: parsedData.articles,
            page:this.state.page+1,
            loading: false
        })
      // }

  }
  render() {
    return (
      <div className="container my-3" style={{textDecoration:'none'}}>
        <h1 className="text-center" style={{margin:'40px 40px'}}>Today Top Headlines from {this.props.category} </h1>
        <div className="row">
        {this.state.loading && <Spiner/>}
          {  !this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  tittle={element.title?element.title.slice(0, 66):" "}
                  description={ element.description?element.description.slice(0, 100): " "}
                  imageurl={element.urlToImage?element.urlToImage:""}
                  url={element.url} author={element.author} date={element.publishedAt} sources={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between ">
        <button type="button"  disabled={this.state.page<=1} className="btn btn-secondary" onClick={this.handleprevClick}> &larr; Previous</button>
        <button  type="button"  className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
export default News;
