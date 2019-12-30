import {AppRegistry, Component} from 'react-native';
import {
  getStorybookUI,
  configure,
  RootContainer,
} from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({onDeviceUI: true});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;

// class StorybookUIHMRRoot extends Component {
//   render() {
//     return <StorybookUIRoot />;
//   }
// }

// Assuming you have Reactotron on console.tron
// export default console.tron.storybookSwitcher(StorybookUIHMRRoot)(
//   RootContainer,
// );
