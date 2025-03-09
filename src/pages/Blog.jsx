import React from "react";
import "../styles/blog.css";

const Blog = () => {
  const articles = [
    {
      title: "Coder son site en HTML/CSS",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/blog/coder.jpg"),
      date: "Publié le 22 août 2022",
    },
    {
      title: "Vendre ses produits sur le web",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/blog/croissance.jpg"),
      date: "Publié le 20 août 2022",
    },
    {
      title: "Se positionner sur Google",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/blog/google.jpg"),
      date: "Publié le 1 août 2022",
    },
    {
      title: "Coder en responsive design",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/blog/screens.jpg"),
      date: "Publié le 31 juillet 2022",
    },
    {
      title: "Techniques de référencement",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/blog/seo.jpg"),
      date: "Publié le 30 juillet 2022",
    },
    {
      title: "Apprendre à coder",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: require("../assets/images/blog/technos.png"),
      date: "Publié le 12 juillet 2022",
    },
  ];

  return (
    <section className="blog">
      <div className="banner"></div>

      <div className="text-center mt-5">
        <h1 className="title">BLOG</h1>
        <p className="subtitle">Retrouvez ici quelques articles sur le développement web.</p>
        <div className="blue-line"></div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <div className="card">
                <img src={article.img} className="card-img-top img-fluid" alt={article.title} />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.text}</p>
                  <a className="btn btn-primary" aria-label={`Lire l'article "${article.title}"`}>Lire la suite</a>
                </div>
                <div className="card-footer">
                  <small>{article.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;