import React, { Component } from 'react'
import './App.css'
import FavouriteMovie from './FavouriteMovie'
import MovieNames  from './MovieNames'
export class App extends Component {
    constructor(){
        super()
        this.state={
            movies:[],
            movieData:[],
            showmoviedetails:true,
            Favourite:[],
            FavouriteMovies:true
        }
    }
    showFav=()=>{
        this.setState({
            FavouriteMovies:false

        })
    }
    BacktoLobby=()=>{
        this.setState({
            showmoviedetails:true,
            FavouriteMovies:true,
            movieData:[]
        })
      
    }
    favMovie=(item)=>{
        this.state.Favourite.push(item)
        console.log('Iam the Favouite',this.state.Favourite)
       }
    handleClick=()=>{
        this.setState({
            showmoviedetails:true,
            movieData:[]
        })
    }
   handleChange=(item)=>{
       this.state.movieData.push(item)
    this.setState({
        showmoviedetails:false,
       
    })

    console.log('MovieData',this.state.movieData)
   }
    componentDidMount() {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=843af9e8eaf0249965d779ee8736e9f1&language=en-US&page=1')
     .then(data => data.json()) 
     .then(data =>{
        //  console.log(data);
         this.setState({movies:data.results})
     })
    }
    render() {
        const {movies}=this.state
        console.log(this.state.movies)
        return (<>
            <div style={{backgroundColor:'black',minWidth:'1370px'}} className='container'>
      <nav className="navbar navbar-inverse">
  <ul class="nav navbar-nav">
   <h1 style={{color:'white'}}>MovieDb</h1> 
 {this.state.FavouriteMovies?<button onClick={this.showFav} className='btn btn-dark' style={{color:'white',fontSize:'1rem',marginLeft:'69rem',marginTop:'-39px'}}>Show Favouites</button>
 :<button onClick={this.BacktoLobby} className='btn btn-dark' style={{color:'white',fontSize:'1rem',marginLeft:'69rem',marginTop:'-39px'}}>Return to Movies</button>}

   
  </ul>
</nav>

</div >
{this.state.FavouriteMovies?
<div   style={{marginLeft:'5pxpx',padding:'5px',backgroundColor:'grey'}} id='MoviePages' >{this.state.showmoviedetails?
<div style={{display:'flex',flexWrap:'wrap',justifyContent:"space-between"}}> {movies && movies.map((c)=>{
    return(
   <img  className='zoom' onClick={()=>this.handleChange(c)} src={`https://image.tmdb.org/t/p/w300${c.poster_path}`} /> 
  
   )}) }
</div>

:<MovieNames
   movieNames={this.state.movieData}
   handleClick={this.handleClick}
   favMovie={this.favMovie}
/>
    }</div>
     :<FavouriteMovie 
     Favourite={this.state.Favourite}
     BacktoLobby={this.BacktoLobby}
     />}</>)
                   }

}

export default App
