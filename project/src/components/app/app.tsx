import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  numberRentalOffers: number;
}

function App({numberRentalOffers}: AppScreenProps): JSX.Element {
  return (<WelcomeScreen numberRentalOffers={numberRentalOffers}/>);
}

export default App;
