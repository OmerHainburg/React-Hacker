import React from "react";
//import "./styles.css";
import "./App.css";
import moment from "moment";

export default function ArticleList(articles) {
  const articleObj = articles.posts;

  return (
    <section className="articleListsection">
      {articleObj.map((article) => (
        <div>
        <a href={article.url}>
        <div className="articlecard">
            <h2 className="App-articlecard">{article.title}</h2>
        </div>
            <p className="App-p-wrapper">
              created by {article.author} on{" "}
              {moment(`${article.created_at}`).utc().format("DD-MM-YYYY")}
              <span>points: {article.points}</span>
            </p>
        </a>
        <hr className="dotted"></hr>
        </div>
      ))}
    </section>
  );
}