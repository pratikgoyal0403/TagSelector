import classes from "./TagsContainer.module.css";
import AddIcon from "@material-ui/icons/Add";

export default function TagsContainer({ tags, selectTag, addNewTag }) {
  return (
    <div className={classes.tagsContainer}>
      {tags.map((tag, index) => (
        <div
          className={classes.options}
          key={tag + index}
          onClick={() => selectTag(tag)}
        >
          {tag}
        </div>
      ))}

      <div
        className={[classes.options, classes.addOption].join("  ")}
        onClick={addNewTag}
      >
        <AddIcon />
        <p>Add Tag</p>
      </div>
    </div>
  );
}
