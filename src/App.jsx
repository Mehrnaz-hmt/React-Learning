import "./App.css";
function App() {
  return <div>
    <h1>My courses</h1>
    <div className="course-item">
        <div className="course-item__img">
            <img src="../public/images/js.png" alt="image-1" />
        </div>
        <div className="course-item__detail">
            <div className="course-item__body">
                <div>
                    <p className="title">React.js course</p>
                    <p className="desc">The ultimate React and Redux course</p>
                </div>
                <span className="rate">4</span>
            </div>
            <div className="course-item__detail">

            </div>
        </div>
    </div>
    <div className="course-item">
        <div className="course-item__img">
            <img src="../public/images/React.png" alt="image-1" />
        </div>
        <div className="course-item__detail">
            <div className="course-item__body">
                <div>
                    <p className="title">React.js course</p>
                    <p className="desc">The ultimate React and Redux course</p>
                </div>
                <span className="rate">4</span>
            </div>
            <div className="course-item__detail">

            </div>
        </div>
    </div>
    <div className="course-item">
        <div className="course-item__img">
            <img src="../public/images/Next.png" alt="image-1" />
        </div>
        <div className="course-item__detail">
            <div className="course-item__body">
                <div>
                    <p className="title">React.js course</p>
                    <p className="desc">The ultimate React and Redux course</p>
                </div>
                <span className="rate">4</span>
            </div>
            <div className="course-item__detail">

            </div>
        </div>
    </div>
  </div>;
}

export default App;
