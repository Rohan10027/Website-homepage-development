import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Game Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Algorithm and Complexity",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Entrepreneurship",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Machine Learning",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Cloud Computing",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>• Employed 3+ Rapid API for seamless data retrieval from its database.</p>
                <p>• Crafted a sleek interface, integrating OpenAI’s model and deploying Redux
Toolkit for streamlined link management, encompassing search, clipboard, and
history storage. Fetches metadata of 5-7 URLs in 1-2 mins</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>• Developed an intuitive e-commerce app with a diverse productrange and
seamless cart management using React frontend, MongoDB database, and
RESTful Express server with 30+ components.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>• Designed a modern 6 pages, glass-morphism-inspired UI/UX web app with
Responsive JSX components and visually appealing user experience.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="logo"></img>
    </section>
  )
}
