import Alert from 'components/alert/alert.component';
import Canceled from 'components/calendar/calendar.component';
import Calendar from 'react-calendar';
import SearchFlorist from 'components/bookings/search-florist.component';
import CurrentAppointments from 'components/bookings/current-appointment.component';

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
    <div className="dashboard">
      <div className="containerLeft">
        <Calendar />
        <Alert today={today} clearAlert={clearAlert} />
        <Canceled canAppList={canAppList} clearApp={clearApp} />
      </div>
      <div className="containerRight">
        <SearchFlorist locations={locations} />
        <CurrentAppointments
          appointments={appointments}
          canAppList={canAppList}
          cancelAppointment={cancelAppointment}
        />
      </div>
    </div>
  );
};

export default Dashboard;
