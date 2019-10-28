import Reactotron, {storybook} from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative({
      storybook: true,
    })
    .connect();

  console.tron = tron;

  tron.clear();
}
