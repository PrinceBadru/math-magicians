import { useState, useEffect } from 'react';
import './quote.css';

export default function ShowQuote() {
  const [retell, setRetell] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const category = 'computers';
      const apiKey = 'bnqnnOM1gde1qM8Farv5hA==Z9wth7aFcidEsatZ';
      try {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            methode: 'GET',
            headers: {
              'X-Api-Key': apiKey,
            },
          },
        );

        const json = await res.json();
        setRetell(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setRetell, setIsLoading]);

  if (hasError) return <div className="load">Something went wrong!</div>;

  if (isLoading) return <div className="load">Loading...</div>;

  return (
    <>
      <div className="quote-container">
        <div className="title-quote">Amazing Quotes ⭐️</div>
        <p className="quote">{retell.quote}</p>
        <h2 className="author">
          👤 By:
          {retell.author}
        </h2>
        <p className="catagory">
          Type of Quote:
          { retell.category}
        </p>
      </div>
    </>
  );
}
