import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Employee from './Employee';
import { removeEmployee, searchEmployees } from './EmployeeApi';


const EmployeeList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string; }>();
  const [proveedors, setproveedors] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchEmployees();
    setproveedors(result);
  }

  const remove = async (id: string) => {
    await removeEmployee(id);
    search();
  }

  const addEmployee = () => {
    history.push('/page/employee/new');
  }

  const editEmployee = (id: string) => {
    history.push('/page/employee/' + id);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>





        <IonContent>
          <IonCard>
            <IonTitle>Gestión de Empleados</IonTitle>

            <IonItem>
              <IonButton onClick={addEmployee} color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Agregar Empleado
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Teléfono</IonCol>
                <IonCol>Dirección</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {proveedors.map((proveedor: Employee) =>
                <IonRow>
                  <IonCol>{proveedor.firstname} {proveedor.lastname}</IonCol>
                  <IonCol>{proveedor.email}</IonCol>
                  <IonCol>{proveedor.phone}</IonCol>
                  <IonCol>{proveedor.address}</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear"
                      onClick={() => editEmployee(String(proveedor.id))}>
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>

                    <IonButton color="danger" fill="clear"
                      onClick={() => remove(String(proveedor.id))}>
                      <IonIcon icon={close} slot="icon-only" />
                    </IonButton>
                  </IonCol>
                </IonRow>
              )}

            </IonGrid>
          </IonCard>


        </IonContent>






      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;
