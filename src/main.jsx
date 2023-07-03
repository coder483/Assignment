import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
   <Auth0Provider
    domain="dev-3k7kknbkvki2fqxq.us.auth0.com"
    clientId="rY28AM0b87dps5DrYHGFi1GQrTsM8YBB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App/>
  </Auth0Provider>
)
