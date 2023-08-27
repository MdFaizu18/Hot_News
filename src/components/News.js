import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
static defaultProps ={
  country:'in',
  pagesize:24,
  category:'general'
}
static propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}


  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

  // https://newsapi.org/v2/top-headlines?country=${this.props.country}in&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page +1}&pageSize=${this.props.pagesize}


 async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=1&pageSize=${this.props.pagesize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    articles:parsedData.articles,
     totalResults:parsedData.totalResults,
     loading:false
    })
 }

handleNextClick= async ()=>{
if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)){}
else{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page +1}&pageSize=${this.props.pagesize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState({
    page:this.state.page +1,
    articles:parsedData.articles,
    loading:false
  }
    
  )
}
  }

handlePrevClick= async()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page -1}&pageSize=${this.props.pagesize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState({
    page:this.state.page -1,
    articles:parsedData.articles,
    loading:false
  }
    
  )
}


  render() {
    return (
      <div>
        <div className='container my-4 '>
          <h1 className='text-center' style={{margin:'30px 0'}}><span style={{color:'red', fontWeight:500}}>Hot</span>News - Top Headlines</h1>
        
         { this.state.loading && <Spinner/>}
          <div className="row mt-3 my-2">
          {!this.state.loading && this.state.articles.map((elements)=>{
              return <div className="col-md-3 my-3" key={elements.url}>
               <NewsItems  title={elements.title?elements.title.slice(0,45):""} description={elements.description?elements.description.slice(0,88):""}
                imageUrl={elements.urlToImage} url={elements.url} />
              </div>

})}
</div>
          
        </div>

        <div className="container d-flex justify-content-between my-5">
        <button  disabled={this.state.page<=1}type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button  disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

        </div>
     
    )
  }
}

export default News
