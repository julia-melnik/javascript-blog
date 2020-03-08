'use strict';
function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;



  /*  remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /*   remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post .post-author',
  optTagsListSelector = '.tags.list';


function generateTitleLinks(customSelector = '') {  /* O co chodzi??? */

  /*  remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /*  for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector); /* O co chodzi??? */
  console.log(articles);
  let html = ''; /* O co chodzi??? */
  for (let article of articles) {

    /*  get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */ /*   get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML; /* o co chodzi z inner */
    console.log(articleTitle);


    /*  [ create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML); /* jak robimy console

 /* insert link into titleList */
    html = html + linkHTML; /* o co chodzi z inner */
  }
  titleList.innerHTML = html; /* o co chodzi z inner */
}
generateTitleLinks();
const links = document.querySelectorAll('.titles a');
console.log(links);
for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}



/* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL */
/* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL */
/* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL *//* ZACZYNA SIE 6 MODUL */

function generateTags() {

  /* [NEW] create a new variable allTags with an empty array */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  /* START LOOP: for every article: */
  for (let article of articles) {
    
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {  

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>'; /* O co chodzi z + ??? */
      console.log(linkHTML);

      /* add generated code to html variable */
      html = html + linkHTML;
      console.log(html);

      /* [NEW] check if this link is NOT already in allTags */
      if (!allTags.hasOwnProperty(tag)) {

        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }


      /* END LOOP: for each tag */
    }

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.insertAdjacentHTML('beforeend', html);

    /* END LOOP: for every article: */
  }
  calculate(tags);
  generateTags();
  const tags = document.querySelectorAll('.post-tags .list li a');
  for (let tag of tags) {
    tag.addEventListener('click', titleClickHandler);
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');

  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams)
}
/* [NEW] create variable for all links HTML code */
let allTagsHTML = '';

/* [NEW] START LOOP: for each tag in allTags */
for (let tag in allTags) {

  /* generate code of a link and add it to allTagsHTML */
  allTagsHTML += 'tag + (' + allTags[tag] + ') ';

  /* [NEW] END LOOP: for each tag in allTags */
}

/* [NEW] add html from allTags to tagList */
tagList.innerHTML = allTags.join(' ');
// tagList.innerHTML = allTags.join(' ');
console.log(allTags);




function tagClickHandler(event) {    /* po co tutaj event */

  /*[DONE]   prevent default action for this event */
  event.preventDefault();

  /* [DONE]  make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('a.active[href^="#tag-"]');

  /* [DONE]  make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');

  /* [DONE] find all tag links with class active */

  const tagLink = document.querySelectorAll('.active');

  /* [DONE] START LOOP: for each active tag link */

  for (let tagLink of tagLinks) {

    /* [DONE]  remove class active */

    tagLink.classList.remove('active');

    /* [DONE]  END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */

  const hrefTagLink = document.querySelectorAll(a.active[href^="#tag-"]);

  /* START LOOP: for each found tag link */
  for (let hrefTagLink of hrefTagLinks) {

    /* add class active */

    hrefTagLink.classList.add('active');

    /*  [DONE] END LOOP: for each found tag link */
  }

  generateTitleLinks('[data-tags~="' + tag + '"]');
  /* execute function "generateTitleLinks" with article selector as argument */
}



function addClickListenersToTags() {

  /* [DONE]  find all links to tags */
  addClickListenersToTags();
  const link = document.querySelectorAll('tags');
  console.log(links);

  /* [DONE] START LOOP: for each link */
  for (let link of Links) {

    /* [DONE] add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
  }
}
}


//*AUTOR*//
//*AUTOR*//
//*AUTOR*//
//*AUTOR*//
//*AUTOR*//


function generateAuthors() {


  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);
  let html = '';
  for (let article of articles) {

    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find authors wrapper */
      const authorsWrapper = article.querySelector(optArticleAuthorSelector);

      /* make html variable with empty string */
      let html = '';

      /* get authors from data-author attribute */
      const articleAuthor = article.getAttribute('data-author');

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#author-' + author + '">' + author + '</a></li>';
      console.log(linkHTML);

      /* add generated code to html variable */
      html = html + linkHTML;
      console.log(html);

      /* insert HTML of all the links into author wrapper */
      authorWrapper.insertAdjacentHTML('beforeend', html);

      /* END LOOP: for every article: */
    }

    generateAuthors();

    const authors = document.querySelectorAll('.post .post-author a');
    for (let author of authors) {
      author.addEventListener('click', titleClickHandler);
    }



    function authorClickHandler(event) {

      /*[DONE]   prevent default action for this event */
      event.preventDefault();

      /* [DONE]  make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;

      /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('a.active[href^="#author-"]');

      /* [DONE]  make a new constant "author" and extract tag from the "href" constant */
      const author = href.replace('#author-', '');

      /* [DONE] find all author links with class active */

      const authorLink = document.querySelectorAll('.active');

      /* [DONE] START LOOP: for each active author link */

      for (let authorLink of authorLinks) {

        /* [DONE]  remove class active */

        authorLink.classList.remove('active');

        /* [DONE]  END LOOP: for each active author link */
      }
      /* find all author links with "href" attribute equal to the "href" constant */

      const hrefAuthorLink = document.querySelectorAll(a.active[href ^= "#author-"]);

      /* START LOOP: for each found tag link */
      for (let hrefAuthorLink of hrefAuthorLinks) {

        /* add class active */

        hrefAuthorLink.classList.add('active');

        /*  [DONE] END LOOP: for each found tag link */
      }
      generateTitleLinks('[data-author="' + author + '"]');

      /* execute function "generateTitleLinks" with article selector as argument */
    }


  }

  function addClickListenersToAuthors() {

    /* [DONE]  find all links to tags */
    addClickListenersToAuthors();
    const link = document.querySelectorAll('author');
    console.log(links);

    /* [DONE] START LOOP: for each link */
    for (let link of Links) {

      /* [DONE] add tagClickHandler as event listener for that link */
      link.addEventListener('click', authorClickHandler);

      /* END LOOP: for each link */
    }
  }
}


