import Reactotron, {storybook, overlay} from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .use(overlay())
    .useReactNative({
      storybook: true,
    })
    .connect();

  console.tron = tron;

  tron.clear();
}
