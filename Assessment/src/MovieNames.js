import React, { Component } from 'react'

 class MovieNames extends Component {
   constructor(){
     super()
     this.state={
   
     }
   }
   
  render() {
    const {movieNames}=this.props
    return (
      <div>
        {movieNames.map((item)=>{
          return(<>
<div style={{fontSize:'4rem',marginLeft:'19px'}} >{item.original_title}</div>
<img style={{marginLeft:'20px'}} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
<div style={{marginLeft:'21rem',marginTop:'-28rem'}} > <b style={{fontSize:'37px'}}>Overview</b><br/> {item.overview}</div>
<button onClick={this.props.handleClick} style={{marginLeft:'21rem'}} type="button" class="btn btn-dark">Back</button>
<button onClick={()=>this.props.favMovie(item)} style={{marginLeft:'4px'}} type="button" class="btn btn-dark">Add to Favouites</button>


</>)
        })}
      </div>
    )
  }
}

export default MovieNames
