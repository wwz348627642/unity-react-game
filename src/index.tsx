import '@/publicPath';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const bootstrap = async () => {
  __DEV__ && console.log(`[${APP_NAME}] react app bootstraped`);
};



export const mount = async (props?: any) => {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    (props?.container || document).querySelector('#root'),
  );
};

export const unmount = async (props?: any) => {
  ReactDOM.unmountComponentAtNode((props?.container || document).querySelector('#root'));
};

// 本地启动，则直接调 mount
!window.__POWERED_BY_QIANKUN__ && mount();
