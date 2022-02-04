import React from "react";
import "./styles.css";
import moment from "moment";

export default function ArticleList(articles) {
  //   console.log(articles.articles);
  const articleObj = articles.posts;
  //   console.log(articleObj);

  return (
    <section className="articleListsection">
      {articleObj.map((article) => (
        <a href={article.url}>
          <div className="articlecard">
            <h2 className="articletitle">{article.title}</h2>
            <p className="articleinfo">
              created by {article.author} on{" "}
              {moment(`${article.created_at}`).utc().format("DD-MM-YYYY")}
              <span>points: {article.points}</span>
            </p>
          </div>
        </a>
      ))}
    </section>
  );
}