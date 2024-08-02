

export default function CourseList() {
    return <div className="course-item">
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
       <div className="course-item__footer">
         <div className="tags">
           <span className="badge badge--secondary">React.js</span>
           <span className="badge badge--secondary">Front-End</span>
         </div>
         <div className="caption">
           <div className="date">
             {new Date().toLocaleDateString("en-US", {
               month: "short",
               year: "numeric",
               day: "numeric",
             })}
           </div>
           <span className="badge badge--primary">Completed</span>
         </div>
       </div>
     </div>
   </div>
 }