import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop:65 }}>
			<Scene key="auth">
				<Scene 
					key="login"
					component={LoginForm}
					title="Please Login"
					/>
			</Scene>
		</Router>
		);

};

export default RouterComponent;