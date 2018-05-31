
class Article {
  constructor(element) {
    this.element = element;
    this.expandButton = this.element.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    this.expandButton.addEventListener('click', () => {this.expandArticle()} );
  }
  
  expandArticle() {
    this.element.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article');

articles = Array.from(articles).map(article => new Article(article));

TweenMax.staggerFrom('.article', 2, {opacity:0, scale:0,}, 0.2);

