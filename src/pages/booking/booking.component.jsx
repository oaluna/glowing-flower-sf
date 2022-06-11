import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Modal from 'react-responsive-modal';

const AppointmentList = ({ appointments, cancelAppointment }) => {
  return (
    <div className="appList">
      {appointments.map((val, index) => (
        <>
          val !== undefined && (
          <>
            <Cards
              key={index}
              florist={appointments[index].florist}
              specialty={appointments[index].specialty}
              address1={appointments[index].address1}
              appDate={appointments[index].appDate}
              appTime={appointments[index].appTime}
              cancelAppointment={cancelAppointment.bind(this, index)}
            />
          </>
          );
        </>
      ))}
    </div>
  );
};

const Canceled = ({
  florist,
  specality,
  appDate,
  canAppointmentList,
  clearApp,
}) => {
  return (
    <div className="canceled">
      {canAppointmentList[0].florist === '' ||
      canAppointmentList[0].florist === undefined ||
      canAppointmentList.length === 0 ? (
        <div className="canceledContainer">
          <div className="canceledHeader">
            <h3>Canceled visits</h3>
            <span className="dots">...</span>
          </div>
          <p>You have no canceled visits</p>
          <p></p>
        </div>
      ) : (
        <div className="canceledContainer">
          <div className="canceledHeader">
            <h3>Canceled visits</h3>
            <span onClick={clearApp} className="dots">
              ...
            </span>
          </div>
          <p>{`You have  ${canAppointmentList.length} canceled visit(s):`}</p>
          {canAppointmentList.map((val, index) => (
            <div className="canceledDetails" key={index}>
              <p>{`${canAppointmentList[index].florist}`}</p>
              <div className="canceledDate">
                <p>{canAppointmentList[index].appDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendarContainer">
        <div className="calendarMonth">
          {/* <img src={Back}/> */}
          <span>April 2018</span>
          {/* <img src={Forward}/> */}
        </div>
        <div className="calendarDay">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SAT</span>
          <span>SUN</span>
        </div>
        <div className="weekDay">
          <span className="previousMonth">28</span>
          <span className="previousMonth">29</span>
          <span className="previousMonth">30</span>
          <span className="previousMonth">31</span>
          <span>1</span>
          <span>2</span>
          <span className="endDay">3</span>

          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span className="endDay">10</span>

          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span className="endDay">17</span>

          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span className="endDay">24</span>

          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span className="endDay">1</span>
        </div>
      </div>
    </div>
  );
};

const Cards = ({ florist, specialty, appDate, appTime, cancelAppointment }) => {
  return (
    <main className="cards">
      <div className="container">
        <header className="cardsHeader">
          {/* <img className="profilePic" src={Doctor} alt="medical logo" /> */}
          <div className="profileTitle">
            <p>{florist}</p>
            <p>Dermatologist</p>
          </div>
        </header>
        <section className="profileDate">
          <div className="profileleft">
            {/* <img src={CalendarSmall} alt="calendar icon" /> */}
            <span>{appDate}</span>
          </div>
          <div className="profileRight">
            {/* <img src={Clock} alt="time icon" /> */}
            <span>{appTime}</span>
          </div>
        </section>

        <section className="profileButtons">
          <button onClick={cancelAppointment} className=" button cancel">
            <p></p>
          </button>
        </section>
      </div>
    </main>
  );
};
const CurrentAppointments = ({ appointments, cancelAppointment }) => {
  return (
    <main className="currentAppointments">
      <div className="container">
        <header className="header">
          <h3>Appointments</h3>
          <p className="dots">...</p>
        </header>

        <section className="buttonContainer">
          <div className="sectionLeft">
            <button className="button1">Upcoming</button>
            <button className="button2">Past</button>
          </div>
          <div className="sectionRight">
            <span>
              Sort By: <strong>Date</strong>
            </span>
            <select>
              <option selected>Today</option>
            </select>
          </div>
        </section>
        <section className="cardsContainer">
          <AppointmentList
            appointments={appointments}
            cancelAppointment={cancelAppointment}
          />
        </section>
      </div>
    </main>
  );
};

const Dashboard = ({
  appointments,
  cancelAppointment,
  canAppointmentList,
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
        <Canceled canAppointmentList={canAppointmentList} clearApp={clearApp} />
      </div>
      <div className="containerRight">
        <Search locations={locations} />
        <CurrentAppointments
          appointments={appointments}
          canAppointmentList={canAppointmentList}
          cancelAppointment={cancelAppointment}
        />
      </div>
    </div>
  );
};

const Chandra = () => {
  return (
    <div className="florists">
      <span>We are here</span>
    </div>
  );
};

class GoogleMaps extends Component {
  constructor({ props }) {
    super(props);
  }
  static defaultProps = {
    center: { lat: 37.785287, lng: -122.4127535 },
    zoom: 12,
  };

  render() {
    return (
      <div className="googleMaps">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Chandra lat={37.785287} lng={-122.4127535} />
        </GoogleMapReact>
      </div>
    );
  }
}

const InboxMessages = ({ name, date, message }) => {
  return (
    <div className="inboxMessages">
      <img src="" alt="profile pic" />

      <div className="inboxMessagesDetails">
        <div className="inboxMessagesDetailsTop">
          <span>{name}</span>
          <span>{date}</span>
        </div>
        <div className="inboxMessagesDetailsBottom">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

const Alert = ({ today, clearAlert }) => {
  return (
    <div className="alert">
      {' '}
      {today[0].florist === '' || today[0] === undefined ? (
        <div className="alertContainer">
          <div className="alertHeader">
            <h3> Alert </h3> <p className="dots"> ... </p>{' '}
          </div>{' '}
          <p> You have no visits today : </p>{' '}
          <ul>
            {' '}
            {/* <li>Dr Anthony Wagner <span>Dermatologist</span></li>
                          <li>Dr Anthony Wagner <span>Dentist</span></li> */}{' '}
          </ul>{' '}
        </div>
      ) : (
        <div className="alertContainer">
          {' '}
          <div className="alertHeader">
            <h3> Alert </h3>{' '}
            <p onClick={clearAlert} className="dots">
              {' '}
              ...{' '}
            </p>{' '}
          </div>{' '}
          <p> {`You have ${today.length} visit(s) today:`} </p>{' '}
          {today.map((val, index) => {
            return (
              <ul key={index}>
                <li>
                  {' '}
                  {today[index].florist} <span> {today[index].specialty} </span>
                </li>
              </ul>
            );
          })}{' '}
        </div>
      )}{' '}
    </div>
  );
};

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: 'false',
    };
  }

  addCard = (e) => {
    e.preventDefault();
    alert('clicked!');
    this.setState({ submitted: 'true' });
    console.log(this.state.submitted);
  };

  render() {
    const { submitted } = this.state;

    if (this.state.submitted === ' false') {
      return (
        <div className="payment">
          <h1>Thank You</h1>
          <p>Your card has been added</p>
        </div>
      );
    } else {
      return (
        <div className="payment">
          <h1>ADD CARD TO FILE</h1>
          <div className="container">
            <header className="cardTop">
              {/* <img
                className="mastercard"
                src={Mastercard}
                alt="mastercard logo"
              /> */}
              <div className="details">
                <p>PAYMENT</p>
                <p>DETAILS</p>
              </div>
            </header>
            <div className="cardBottom">
              <form>
                <input
                  className="name"
                  type="text"
                  placeholder="LEBRON JAMES"
                />
                <div className="cardNumber">
                  <input
                    className="number"
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                  <input
                    className="expiration"
                    type="text"
                    placeholder="MONTH | YEAR"
                  />
                </div>
                <div className="ccvContainer">
                  <input className="ccv" type="text" placeholder="343" />
                  <button onClick={this.addCard}>ENTER</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

const Messages = () => {
  return <div className="messages"></div>;
};

const Search = () => {
  return (
    <section className="search">
      <GoogleMaps />
      <div className="searchCard">
        <header>
          <span>Chandra Tanuwijaya</span>
        </header>
      </div>
    </section>
  );
};

// const Sidebar = ({ changeRoute }) => {
//   return (
//     <div className="sidebar">
//       {/* <button onClick={changeRoute} id="newClient" className="categories"><img className="icons" src={New} alt="new icon" /></button> */}
//       <button onClick={changeRoute} id="dashboard" className="categories">
//         <img className="icons" src={Dashboard} alt="Dashboard icon" />
//       </button>
//       {/* <button onClick={changeRoute} id="folder" className="categories"><img className="icons" src={Folder} alt="Folder icon" /></button> */}
//       {/* <button onClick={changeRoute} id="chart" className="categories"><img className="icons" src={Chart} alt="Chart icon" /></button> */}
//       {/* <button onClick={changeRoute} id="chat" className="categories"><img className="icons" src={Chat} alt="Chat icon" /></button> */}
//       {/* <button onClick={changeRoute} id="calendar" className="categories"><img className="icons" src={Calendar} alt="calendar icon" /></button> */}
//       <button onClick={changeRoute} id="payment" className="categories">
//         <img className="icons" src={Payment} alt="Payment icon" />
//       </button>
//       {/* <button onClick={changeRoute} id="message" className="categories"><img className="icons" src={Email} alt="Email icon" /></button> */}
//     </div>
//   );
// };

const BookingPage = ({
  locations,
  routes,
  appointments,
  cancelAppointment,
  canAppointmentList,
  clearApp,
  today,
  clearAlert,
}) => {
  return (
    <div className="mainContainer">
      {routes === 'dashboard' ? (
        <Dashboard
          locations={locations}
          today={today}
          appointments={appointments}
          canAppointmentList={canAppointmentList}
          cancelAppointment={cancelAppointment}
          clearApp={clearApp}
          clearAlert={clearAlert}
        />
      ) : (
        <Payment />
      )}
    </div>
  );
};

const Appointment = ({
  open,
  onCloseModal,
  onOpenModal,
  bookAppointment,
  handleChangeDoctor,
  handleChangeDate,
  handleChangeTime,
  greeting,
}) => {
  return (
    <div className="makeAppointment">
      <button onClick={onOpenModal} className="makeAppointmentButton">
        Make an appointment
      </button>
      {greeting === false ? (
        <Modal open={open} onClose={onCloseModal} center>
          <div className="modalWindow">
            <h4>Select a Doctor</h4>
            <select id=" florist" onChange={handleChangeDoctor}>
              <option>Select a Doctor</option>
              <option defaultValue>Dr Winger Michael</option>
              <option>Dr. Stephanie Satz</option>
              <option>Dr Zaher Amjad</option>
              <option>Dr. Charles McFarlane</option>
            </select>

            <h4>Select a date</h4>
            <select id=" appDate" onChange={handleChangeDate}>
              <option>Select a date</option>
              <option>6/28/2018</option>
              <option>6/29/2018</option>
              <option>6/30/2018</option>
              <option>7/1/2018</option>
              <option>7/2/2018</option>
              <option>7/3/2018</option>
              <option>7/4/2018</option>
              <option>7/5/2018</option>
              <option>7/6/2018</option>
            </select>

            <h4>Select a time</h4>
            <select id=" appTime" onChange={handleChangeTime}>
              <option>Select a time</option>
              <option>8:30am</option>
              <option>9:30am</option>
            </select>

            <button onClick={bookAppointment}>Book Appointment</button>
          </div>
        </Modal>
      ) : (
        <div>
          <h1>Thank You</h1>
          <p>Your apointment is set</p>
        </div>
      )}
      <div className="profileContainer">
        <div className="profilePic">
          {/* <img src={Me} alt="profile icon" /> */}
        </div>
      </div>
    </div>
  );
};

class Bookings extends Component {
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
      canAppointmentList: [
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

  handleChangeDoctor = (e) => {
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
    this.setState({
      ...this.state.canAppointmentList,
      canAppointmentList: clearVisits,
    });
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
      this.state.canAppointmentList[0].florist !== ''
        ? [...this.state.canAppointmentList]
        : [];

    const newAppointmentList = {
      florist: florist,
      appDate: appDate,
    };

    previousAppointments.push(newAppointmentList);

    delete newState[e];
    alertState = {
      florist: '',
    };
    console.log(alertState);
    this.setState({ canAppointmentList: previousAppointments });
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
    const {
      open,
      greeting,
      appointments,
      canAppointmentList,
      today,
      locations,
    } = this.state;

    return (
      <>
        <Appointment
          open={open}
          greetg={greeting}
          onCloseModal={this.onCloseModal}
          onOpenModal={this.onOpenModal}
          bookAppointment={this.bookAppointment}
          handleChangeDoctor={this.handleChangeDoctor}
          handleChangeDate={this.handleChangeDate}
          handleChangeTime={this.handleChangeTime}
        />
        {/* <Sidebar changeRoute={this.changeRoute} /> */}
        <BookingPage
          today={today}
          appointments={appointments}
          canAppointmentList={canAppointmentList}
          cancelAppointment={this.cancelAppointment}
          routes={this.state.routes}
          clearApp={this.clearApp}
          clearAlert={this.clearAlert}
          locations={locations}
        />
      </>
    );
  }
}

export default Bookings;
