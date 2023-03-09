import { Link } from 'react-router-dom';

function NotFoundScreen() : JSX.Element {
  const styles = {
    container: {
      textAlign: 'center' as const,
      marginTop: '5rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f1f1f1',
    },
    heading: {
      fontSize: '6rem',
      margin: 0,
      color: '#555',
    },
    text: {
      fontSize: '2rem',
      margin: '1rem 0 2rem',
      color: '#777',
    },
    link: {
      display: 'inline-block',
      fontSize: '1.5rem',
      padding: '0.5rem 1rem',
      border: '2px solid #555',
      borderRadius: '4px',
      color: '#555',
      textDecoration: 'none',
      transition: 'all 0.3s',
    },
    linkHover: {
      backgroundColor: '#555',
      color: '#fff',
    },
  };

  return(
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Страница не найдена</p>
      <Link style={styles.link} to='/' title='Вернуться на главную'>
        Вернуться на главную
      </Link>
    </div>
  );
}
export default NotFoundScreen;
