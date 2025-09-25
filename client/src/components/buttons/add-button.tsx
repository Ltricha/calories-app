import FoodList from "../lists/food-list";

export default function AddButton(props) {
  function handleClick(e) {
    let list = props.list;

    list = [props.food, ...list];
  }

  return <button>Add</button>;
}
