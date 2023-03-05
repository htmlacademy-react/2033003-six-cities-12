import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  numberRentalOffers: number;
}

function App({numberRentalOffers}: AppScreenProps): JSX.Element {
  return (<MainScreen numberRentalOffers={numberRentalOffers}/>);
}

export default App;
