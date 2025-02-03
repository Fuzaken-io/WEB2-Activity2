import Contact from "./assets/Components/Contact"
import Experience from "./assets/Components/Experience"
import Profile from "./assets/Components/Profile"
import Skills from "./assets/Components/Skills"
import poolImg from "./assets/img/pool.jpg";


function App() {

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[50%] flex flex-col items-center gap-5">
          <Profile
            profile={poolImg}
            name="Lester Mejellano"
            about="Going to the flow."
          />
          <Contact
            email="lestermejellano99@gmail.com"
            phone="09199474131"
            address="Legazpi City, Albay"
          />
          <Skills
            skills={['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Tailwind']}
          />
          <Experience
            experiences={
              [
                { title: "Frontend Web Developer", date: "2022 - 2024", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium pariatur velit cupiditate fuga. Velit ratione ab eum soluta. Ipsum explicabo dignissimos fugiat officia maxime eaque" },
                { title: "Web Developer", date: "2020 - 2022", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium pariatur velit cupiditate fuga. Velit ratione ab eum soluta. Ipsum explicabo dignissimos fugiat officia maxime eaque" }
              ]
            }
          />
        </div>
      </div>
    </>
  )
}

export default App