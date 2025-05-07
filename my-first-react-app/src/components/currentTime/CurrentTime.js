import './CurrentTime.css';

function CurrentTime() {
  const date = new Date().toLocaleTimeString();
  return (
    <div className="CurrentTime">
      <p>Текущее время: {date} </p>
    </div>
  );
}
export default CurrentTime;
