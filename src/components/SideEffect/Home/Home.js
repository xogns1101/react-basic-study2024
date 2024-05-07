import React, { useContext } from 'react';
import Card from '../../UI/Card';
import styles from './Home.module.css';
import AuthContext from '../../store/auth-context';

const Home = () => {
  const { onLogOut } = useContext(AuthContext);

  return (
    <Card className={styles.home}>
      <h1>Welcome Back!</h1>
    </Card>
  );
};

export default Home;
