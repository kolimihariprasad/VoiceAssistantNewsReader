import React, { useState, useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web'; 
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js'
import wordsToNumbers from 'words-to-numbers';

function App() {
  const   [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: 'c128c87de8ea2ab26c92f13c8bbbc3f32e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } 
        else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1]; 
          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);
  
  return (
    <div className="App">
        <div className={classes.logoContainer}>
          <img src="https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2020/06/04133343/Banner-image-3.jpg" className={classes.alanLogo} alt="News Reader Application" />
        </div> 
        <NewsCards articles={newsArticles} activeArticle={activeArticle} /> 
    </div>
  );
}

export default App;
