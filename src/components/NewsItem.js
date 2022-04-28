import React from "react";

const  NewsItem=(props)=> {
    let {tittle,description,imageurl,url,author,date,sources}=props;
    return (
      <div className="container my-3">
        <div className="card">
          <div  style={{display:'ldex',justifyContent:'flex-end',position:'absolute',right:'0' }}>
          <span className="badge badge-danger" >{sources}</span>
          </div>
          <img src={ imageurl ? imageurl:"https://images.app.goo.gl/PgqVzcqdJMKFB41S6"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tittle}....</h5>
            <p className="card-text">
              {description}....
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary btn btn-info ">
               Read  More
            </a>
            <p className="card-text"><small className="text-muted">By { author?author:"unknown"} on {date}</small></p>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
