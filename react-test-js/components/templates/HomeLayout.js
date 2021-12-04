export default function HomeLayout(props) {
  return (
    <div {...props}>
      {props.mine}
      {props.nexts}
      {props.children}
    </div>
  );
}
