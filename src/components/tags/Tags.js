import classes from "./Tags.module.css";
import CloseIcon from "@material-ui/icons/Close";

export default function Tags({ tagText, remove }) {
  return (
    <div className={classes.tagContainer}>
      <p className={classes.tagText}>{tagText}</p>
      <CloseIcon
        style={{ fontSize: "18px", cursor: "pointer" }}
        onClick={remove}
      />
    </div>
  );
}
