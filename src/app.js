import { useState, useEffect } from "react";
import "./style.css";
import TextArea from "./components/textArea/TextArea";
import TagsContainer from "./components/tagsContainer/TagsContainer";

export default function App() {
  const [allTags, setAllTags] = useState([
    "css",
    "javascript",
    "Javascript",
    "JS",
    "html",
    "HTML",
    "react",
    "React JS",
    "node",
    "mongodb",
  ]);
  const [tags, setTags] = useState([...allTags]);
  const [searchStr, setSearchStr] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTags, setShowTags] = useState(false);
  useEffect(() => {
    if (searchStr.length) {
      selectTag(searchStr);
    }
  }, [allTags]);
  const checkAndAdd = () => {
    if (allTags.includes(searchStr.trim())) {
      selectTag(searchStr.trim());
    } else {
      addNewTag();
    }
  };
  const removeTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tag)
    );
  };
  const addNewTag = () => {
    if (searchStr.length) {
      setAllTags((prevTags) => [...prevTags, searchStr]);
    }
  };
  const filterTags = (value) => {
    setSearchStr(value);
    if (!value) {
      setShowTags(false);
      return;
    }
    setShowTags(true);
    setTags((prevTags) => allTags.filter((tag) => tag.includes(value)));
  };
  const selectTag = (tagText) => {
    if (!selectedTags.includes(tagText) && allTags.includes(tagText)) {
      setSelectedTags((prevTags) => [...prevTags, tagText]);
    }
    setSearchStr("");
    setShowTags(false);
  };
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Tags</h1>
        <h4 className="subHeading">Select tags for your profile</h4>
      <TextArea
        searchStr={searchStr}
        change={filterTags}
        selectedTags={selectedTags}
        toggleTags={setShowTags}
        checkAndAdd={checkAndAdd}
        removeTag={removeTag}
      />
      {showTags && (
        <TagsContainer
          tags={tags}
          selectTag={selectTag}
          addNewTag={addNewTag}
        />
      )}
    </div>
      </div>
  );
}
