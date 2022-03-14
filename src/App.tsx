import { FC } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import './App.less';
const unityContext = new UnityContext({
  loaderUrl: '../unityAssets/Build/unityAssets.loader.js',
  dataUrl: '../unityAssets/Build/unityAssets.data',
  frameworkUrl: '../unityAssets/Build/unityAssets.framework.js',
  codeUrl: '../unityAssets/Build/unityAssets.wasm',
})

const App: FC = () => {
  // 一定要给Unity组件设置width和height属性，否则Canvas将无限增大最终导致浏览器卡死
  return <Unity unityContext={unityContext} style={{ width: '100%', height: '100%' }} />
}

export default App;