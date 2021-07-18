import './App.css';
import { Route } from "react-router-dom";
import CourseList from './couses/CourseList';
import CourseA from './couses/CourseA';
import CourseB from './couses/CourseB';
function App() {
  return (
    <div>
      <Route exact path="/">
        <CourseList />
      </Route>
      <Route path="/CourseA">
        <CourseA />
      </Route>
      <Route path="/CourseB">
        <CourseB />
      </Route>
    </div>
  );
}

export default App;
