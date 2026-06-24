export default function Greeting(props) {
  return (
    <div>
      <h3>
        Hello, {props.fn}! Your profession is {props.profession}.
      </h3>
      <h3>
        The favcolor is {props.favcolor}
      </h3>
    </div>
  );
}