import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import CustomerEdit from './pages/customer/CustomerEdit';
import CustomerList from './pages/customer/CustomerList';
import EmployeeEdit from './pages/employee/EmployeeEdit';
import EmployeeList from './pages/employee/EmployeeList';
import SupplierEdit from './pages/supplier/SupplierEdit';
import SupplierList from './pages/supplier/SupplierList';
/* Theme variables */
import './theme/variables.css';





const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactHashRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/customers" />
            </Route>

            <Route path="/page/customers" exact={true}>
              <CustomerList />
            </Route>

            <Route path="/page/customer/:id" exact={true}>
              <CustomerEdit />
            </Route>

            <Route path="/page/employees" exact={true}>
              <EmployeeList />
            </Route>

            <Route path="/page/employee/:id" exact={true}>
              <EmployeeEdit />
            </Route>

            <Route path="/page/suppliers" exact={true}>
              <SupplierList />
            </Route>

            <Route path="/page/supplier/:id" exact={true}>
              <SupplierEdit />
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
