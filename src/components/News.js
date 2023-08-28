// https://newsapi.org/v2/top-headlines?country=${this.props.country}in&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page +1}&pageSize=${this.props.pagesize}
// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=1&pageSize=${this.props.pagesize}
// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page +1}&pageSize=${this.props.pagesize}


import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
    headlines:PropTypes.string
  }
static defaultProps ={
    country:'in',
    pagesize:24,
    category:'general',
    headlines:''

}


constructor(){
    super();
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0
    }
  }





async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  // this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
     articles:parsedData.articles,
     totalResults:parsedData.totalResults,
     loading:false
    })
 }


 fetchMoreData = async () => {
    
  this.setState({page:this.state.page+1});
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
     articles:this.state.articles.concat(parsedData.articles),
     totalResults:parsedData.totalResults,
     loading:false
    })
  
}





  render() {
    return (
      <>
       
          <h1 className='text-center' style={{margin:'30px 0'}}><span style={{color:'red', fontWeight:500}}>Hot</span>News -  Top {this.props.headlines} Headlines </h1>
        
         { this.state.loading && <Spinner/>}

         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >


        <div className="container">


          <div className="row mt-3 my-2">
          {this.state.articles.map((elements)=>{
              return <div className="col-md-3 my-3" key={elements.url}>
               <NewsItems  title={elements.title?elements.title.slice(0,45):""} description={elements.description?elements.description.slice(0,88):""}
                imageUrl={elements.urlToImage} url={elements.url} author={elements.author} date={elements.publishedAt}    source={elements.source.name}                                                                                                                                                                                                                                                                                              />
              </div>                                                                                                                                                                                                                                                    

             })}

         </div>
         </div>
         </InfiniteScroll>
          
         </>

        
        
    
     
    )
  }
}

export default News
