// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../index.css'

export class NewsItem extends Component {
  
  // static propTypes = {}

  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props
    return (
      <>
      <div className="my-3">
        <div className="card">
  <img src={!imageUrl?"/download.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5> <p> <span className="badge btn-sm rounded-pill bg-dark">{source}</span></p>
    <p className="card-text description">{description}</p>
    <p class="card-text"><small class="text-muted">By {author?author:"Unknown"} on {new Date(date).toLocaleString( { month: 'long', dateStyle:'long',timeStyle:'long' })}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">Read More</a>
  </div>
</div>
</div>
      </>
    )
  }
}

export default NewsItem