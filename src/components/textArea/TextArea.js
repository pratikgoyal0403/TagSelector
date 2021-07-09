import classes from "./TextArea.module.css";
import Tags from "../tags/Tags";

export default function TextArea({
  searchStr,
  change,
  selectedTags,
  checkAndAdd,
  removeTag,
}) {
  const keyUpHandler = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      checkAndAdd();
    }
  };
  return (
    <div className={classes.container}>
      {selectedTags.map((tag) => (
        <Tags tagText={tag} key={tag} remove={removeTag.bind(this, tag)} />
      ))}
      <input
        onKeyUp={keyUpHandler}
        onChange={(e) => change(e.target.value)}
        value={searchStr}
      />
    </div>
  );
}
