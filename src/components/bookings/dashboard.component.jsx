import Alert from 'components/alert/alert.component';
import Canceled from 'components/calendar/calendar.component';
import CurrentAppointments from 'components/bookings/current-appointment.component'
import Calendar from 'react-calendar';
import SearchFlorist from "components/bookings/search-florist.component"
import styled from 'styled-components';

const StyledDashboard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 80vw;

  height: 50%;
`;

const ContainerLeft = styled.div`
  width: 60vw;
  height: 50vh;
  margin: 20vh 0vw;
  padding-left: 10vw;
  padding-bottom: 0vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .react-calendar {
    height: 60vh;
    position: relative;
   margin-top: 0vh;
  }
  .react-calendar__tile {
    width: 64px;
    height: 64px;
  }
`;
const ContainerRight = styled.div`
  width: 50vw;
  height: 80%;
  margin-left: 10vw;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .SearchFlorist {
    width: 100%;
  }
`;

const Dashboard = ({
  appointments,
  cancelAppointment,
  canAppList,
  clearApp,
  today,
  clearAlert,
  locations,
}) => {
  return (
    <StyledDashboard>
      <ContainerLeft>
        <Calendar />
        <Alert today={today} clearAlert={clearAlert} />
        <Canceled canAppList={canAppList} clearApp={clearApp} />
      </ContainerLeft>

      <ContainerRight>
       <SearchFlorist locations={locations} />
       <CurrentAppointments
          appointments={appointments}
          canAppList={canAppList}
          cancelAppointment={cancelAppointment}
        />
      </ContainerRight>
    </StyledDashboard>
  );
};

export default Dashboard;