// For search functionality:
// Add in Navbar component,
// 1. constructor(props) {
//     super(props);
//     this.state = {
//       searchInput: ''
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({ searchInput: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSearch(this.state.searchInput);
//   };
// 2. <form className="d-none d-lg-flex" onSubmit={this.handleSubmit}>
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={this.state.searchInput}
//                 onChange={this.handleInputChange}
//               />

// Add in App.js
//  1. constructor() {
//     super();
//     this.state = {
//       searchQuery: ''
//     };
//   }

//   handleSearch = (query) => {
//     this.setState({ searchQuery: query });
//   };
// 2. <Navbar onSearch={this.handleSearch} />

// Add in News.js,
//   async componentDidUpdate(prevProps) {
//         if (prevProps.searchQuery !== this.props.searchQuery) {
//             await this.updateNews();
//         }
//     }

// *Don't forget to add q param in your API








//---------------------  for previous and next buttons  ------------------------------------


// buttons 

{/* <div className="container d-flex justify-content-between my-5">
        <button  disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div> */}

// functions 

// handleNextClick= async ()=>{
//     if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)){}
//     else{
//       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page +1}&pageSize=${this.props.pagesize}`;
//       this.setState({loading:true})
//       let data = await fetch(url);
//       let parsedData = await data.json();
    
//       this.setState({
//         page:this.state.page +1,
//         articles:parsedData.articles,
//         loading:false
//       }
        
//       )
//     }
//       }
    
//     handlePrevClick= async()=>{
//       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b73b590de5c4dc39cfb87dbb5e4d264&page=${this.state.page -1}&pageSize=${this.props.pagesize}`;
//       this.setState({loading:true})
//       let data = await fetch(url);
//       let parsedData = await data.json();
    
//       this.setState({
//         page:this.state.page -1,
//         articles:parsedData.articles,
//         loading:false
//       }
        
//       )
//     }


