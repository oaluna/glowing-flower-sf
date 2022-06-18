import { Component } from 'react';
import axios from "axios"
import CurrentAppointment from 'components/bookings/current-appointment.component';
import Dashboard from "components/bookings/dashboard.component";


class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      florist: null,
      currentAppointment: [],
      upcomingAppointments: [],
    };
    this.handleAdminStatusChange = this.handleAdminStatusChange.bind(this);
    this.handleFloristChange = this.handleFloristChange.bind(this);
    this.handleCurrentAppointmentChange =
      this.handleCurrentAppointmentChange.bind(this);
    this.handleUpcomingAppointmentsChange =
      this.handleUpcomingAppointmentsChange.bind(this);
  }

  handleAdminStatusChange(event) {
    event.preventDefault();
    this.setState(prevState => {
      this.props.auth ? this.isAdmin = !this.state.isAdmin : this.isAdmin = this.state.isAdmin;
    });
  }

  handleFloristChange(event) {
    event.preventDefault();
    this.setState(prevState => {
      this.florist = `Chandra Tanuwijaya`;
    });
  }

  handleCurrentAppointmentChange(event) {
    event.preventDefault();
    this.setState(prevState => {
      this.currentAppointement = this.state.currentAppointment.push(event.target.value)
    });
  }
  handleUpcomingAppointmentsChange(event) {
    event.preventDefault();
    this.setState(prevState => {
      this.upcomingAppointements = this.state.upcomingAppointments.push(event.target.value)
    });
  }

  render() {

    return (
      <div className="adminPage">
      {
        auth ? (
        <div className="adminPage__container">
          <div className="adminPage__header">
            <h3>Administrator Dashboard</h3>
          </div>
          <div className="adminPage__body">
            <Dashboard />
          </div>
        </div>
        ) : <h4>You must be an administrator to access this page.</h4>}
      </div>
    )
  }
}

export default AdminPage;