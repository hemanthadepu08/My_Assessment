import React, { Component } from 'react'

export class FavouriteMovie extends Component {
    render() {
        return (<>
            <div>

            {this.props.Favourite.map((item)=>{
return(
<img style={{marginLeft:'20px'}} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
)
                })}

            </div>
       </> )
    }
}

export default FavouriteMovie
