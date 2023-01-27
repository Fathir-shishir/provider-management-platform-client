import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects2.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects];
};

export default useProjects;
