import React, { Component } from 'react';
import Appointment from 'components/bookings/appointment.component';
//import Sidebar from 'components/sidebar/sidebar.component';
import Dashboard from 'components/bookings/dashboard.component';

class BookingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routes: 'dashboard',
      open: false,
      florist: '',
      appDate: '',
      appTime: '',
      greeting: false,
      appointments: [
        {
          florist: 'Dr. Stephanie Satz',
          appDate: '6/30/2018',
          appTime: '9:30am',
        },
        {
          florist: 'Dr. Zaher Amjad',
          appDate: '7/4/2018',
          appTime: '8:30am',
        },
        {
          florist: 'Dr. Charles McFarlane',
          appDate: '7/10/2018',
          appTime: '8:30am',
        },
      ],
      canAppList: [
        {
          florist: '',
          appTime: '',
        },
      ],
      today: [
        {
          florist: '',
        },
      ],
    };
  }

  handleChangeFlorist = (e) => {
    this.setState({
      ...this.state.appointments.florist,
      florist: e.target.value,
    });
  };

  handleChangeDate = (e) => {
    this.setState({
      ...this.state.appointments.appDate,
      appDate: e.target.value,
    });
  };

  handleChangeTime = (e) => {
    this.setState({
      ...this.state.appointments.appTime,
      appTime: e.target.value,
    });
  };

  // clear today's appointments and cancelled appointments displays
  clearApp = () => {
    let clearVisits = [
      {
        florist: '',
        specialty: '',
        appDate: '',
      },
    ];
    this.setState({ ...this.state.canAppList, canAppList: clearVisits });
  };

  clearAlert = () => {
    let clearToday = [
      {
        florist: '',
        specialty: '',
      },
    ];
    this.setState({ ...this.state.today, today: clearToday });
  };

  //Adds appointments to the dashboard
  bookAppointment = (e) => {
    e.preventDefault();
    const newApp = {
      florist: this.state.florist,
      appDate: this.state.appDate,
      appTime: this.state.appTime,
    };

    this.setState((prevState) => ({
      appointments: [...prevState.appointments, newApp],
    }));
    this.setState({ open: false });
    this.todayAlert(newApp);
  };

  getCurrentDate = () => {
    const d = new Date();
    const month = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();
    return `${month + 1}/${day}/${year}`;
  };

  //Add today appointments to alert box
  todayAlert = (newApp) => {
    const previousAlerts =
      this.state.today[0].florist !== '' ? [...this.state.today] : [];
    const currentDate = this.getCurrentDate();
    if (newApp.appDate === currentDate) {
      previousAlerts.push(newApp);
      this.setState({ today: previousAlerts });
    }
  };

  //removes appointments from the dashboard
  cancelAppointment = (e) => {
    let newState = [...this.state.appointments];
    let alertState = [...this.state.today];

    const { florist, appDate } = newState[e];
    const previousAppointments =
      this.state.canAppList[0].florist !== '' ? [...this.state.canAppList] : [];

    const newAppList = {
      florist: florist,
      appDate: appDate,
    };

    previousAppointments.push(newAppList);

    delete newState[e];
    alertState = {
      florist: '',
    };
    console.log(alertState);
    this.setState({ canAppList: previousAppointments });
    this.setState({ appointments: newState });
  };

  //open book an appointment modal
  onOpenModal = () => {
    this.setState({ open: true });
    console.log('clicked');
  };

  // closes book an appointment modal
  onCloseModal = () => {
    this.setState({ open: false });
  };
  changeRoute = (e) => {
    this.setState({ ...this.state.routes, routes: e.currentTarget.id });
  };

  render() {
    const { open, greeting, appointments, canAppList, today, locations } =
      this.state;

    return (
      <div className="App">
        <Appointment
          open={open}
          greeting={greeting}
          onCloseModal={this.onCloseModal}
          onOpenModal={this.onOpenModal}
          bookAppointment={this.bookAppointment}
          handleChangeFlorist={this.handleChangeFlorist}
          handleChangeDate={this.handleChangeDate}
          handleChangeTime={this.handleChangeTime}
        />
        {/* <Sidebar changeRoute={this.changeRoute} /> */}
        <Dashboard
          today={today}
          appointments={appointments}
          canAppList={canAppList}
          cancelAppointment={this.cancelAppointment}
          routes={this.state.routes}
          clearApp={this.clearApp}
          clearAlert={this.clearAlert}
          locations={locations}
        />
      </div>
    );
  }
}

export default BookingPage;
