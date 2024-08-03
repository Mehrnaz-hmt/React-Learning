import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Javascript",
    description: "Javascript is the most popular web language",
    imageUrl: "../../images/js.png",
    rate: "4.5",
    tags: ["langauges"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Next.JS",
    description:
      "Learning Next is sweet",
    imageUrl: "../../images/next.png",
    rate: "4",
    tags: ["UI/UX design", "web design"],
    start: "2023-03-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "React.JS",
    description:
      "React.JS is a simple,beautifuuul library",
    imageUrl: "../../images/React.png",
    rate: "3.9",
    tags: ["Marketing", "Finance"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Active",
  },
];

export default function CourseList() {
  
  return (
    <div  className="course-list">
      {courses.map((course) =>  <CourseCard course={course} key={course.id} />)}
    </div>
  );
}
