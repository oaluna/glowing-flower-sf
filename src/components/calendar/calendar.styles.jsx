import styled from "styled-components"

export const StyledCalendar = styled.div`
  max-width: 100%;
  min-height: 100vh;
  margin-top: 10vh;
  position: relative;
  &.react-calendar {
    width: 80%;
    height: 30rem;
    background: #fcfcfe;
    margin-left: 15rem;
    border-radius: 0.3rem;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    border: none;
    padding: 2rem;
}
`

export const CalendarContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-color: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.06) 84%);
  border: 1px solid rgba(255,255,255, 0.2);

`