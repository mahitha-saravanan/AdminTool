import React, { useEffect, useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import logo from "../asserts/logo.jpeg";
import tamil from "../asserts/T1 (1).jpg";
import english from "../asserts/eng (1).jpg";
import maths from "../asserts/M1 (1).png";
import physics from "../asserts/P1 (1).jpg";
import chemistry from "../asserts/C1.webp";
import botany from "../asserts/Botany (1).avif";
import zoology from "../asserts/zoology (1).webp";
import commerce from "../asserts/commerce (1).jpg";
import accountancy from "../asserts/accountancy (1).jpg";
import computerScience from "../asserts/cs (1).jpg";
import computerApplications from "../asserts/ca (1).png";
import economics from "../asserts/economics (1).jpg";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeLink, setActiveLink] = useState("");



  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about-us",
        "our-goals",
        "featured-courses",
        "contact",
      ];
      let activeSection = "";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            activeSection = sectionId;
          }
        }
      });

      setActiveLink(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to set the active link on page load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCourses = () => {

    document
      .getElementById("featured-courses")
      .scrollIntoView({ behavior: "smooth" });
  };

  const slides = [
    "https://via.placeholder.com/1000x400?text=Subject+1",
    "https://via.placeholder.com/1000x400?text=Subject+2",
    "https://via.placeholder.com/1000x400?text=Subject+3",
    "https://via.placeholder.com/1000x400?text=Subject+4",
  ];

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const courses = [
    { id: 1, image: tamil, title: "Tamil" },
    { id: 2, image: english, title: "English" },
    { id: 3, image: maths, title: "Maths" },
    { id: 4, image: physics, title: "Physics" },
    { id: 5, image: chemistry, title: "Chemistry" },
    { id: 6, image: botany, title: "Botany" },
    { id: 7, image: zoology, title: "Zoology" },
    { id: 8, image: commerce, title: "Commerce" },
    { id: 9, image: accountancy, title: "Accountancy" },
    { id: 10, image: computerScience, title: "Computer Science" },
    { id: 11, image: computerApplications, title: "Computer Applications" },
    { id: 12, image: economics, title: "Economics" },
  ];

  return (
    <div>
      {/* Navbar */}
      <header>
        <Navbar
          expand="lg"
          fixed="top"
          variant="dark"
          className="shadow"
          style={{ backgroundColor: "#1a1a2e" }}
        >
          <Container>
            {/* Logo */}
            <Navbar.Brand
              href="#hero"
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={logo}
                alt="logo"
                width="60"
                height="auto"
                className="d-inline-block align-top"
              />
              <h4 className="ms-3">Karpom Karpipom</h4>
            </Navbar.Brand>

            {/* Toggle Button for Small Screens */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Navbar Links */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#hero"
                  className={activeLink === "hero" ? "active" : ""}
                  onClick={() => handleNavClick("hero")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#about-us"
                  className={activeLink === "about-us" ? "active" : ""}
                  onClick={() => handleNavClick("about-us")}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="#our-goals"
                  className={activeLink === "our-goals" ? "active" : ""}
                  onClick={() => handleNavClick("our-goals")}
                >
                  Our Goals
                </Nav.Link>
                <Nav.Link
                  href="#featured-courses"
                  className={activeLink === "featured-courses" ? "active" : ""}
                  onClick={() => handleNavClick("featured-courses")}
                >
                  Featured Subjects
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className={activeLink === "contact" ? "active" : ""}
                  onClick={() => handleNavClick("contact")}
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  href="/login"
                  className={activeLink === "login" ? "active" : ""}
                  onClick={() => handleNavClick("login")}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  href="./registration"
                  className={activeLink === "signup" ? "active" : ""}
                  onClick={() => handleNavClick("signup")}
                >
                  SignUp
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {/* Banner */}
      <section
        id="hero"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          paddingBottom: "100px",
          paddingTop: "180px",
        }}
      >
        <Container className="hero ">
          <Row>
            <Col className="text-center">
              <h1 className="hero-heading">Learn New Skills Online</h1>
              <p className="hero-description">
                Explore the best learning opportunities in academics,
                leadership, exam preparation, and personal development. Empower
                yourself with innovative guidance and skill-building tailored
                for 11th and 12th-grade students.
              </p>
              <Button
                onClick={scrollToCourses}
                style={{
                  backgroundColor: "#ff6f61",
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
                className="hero-button"
              >
                Explore Subjects
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Slider */}
      <section
        id="image-slider"
        style={{
          backgroundColor: "white",
          padding: "40px 20px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "40px",
              fontWeight: "bold",
            }}
          >
            Explore Our Team
          </h2>

          <div
            className="slider-container"
            style={{
              position: "relative",
              maxWidth: "1000px",
              margin: "auto",
              overflow: "hidden",
            }}
          >
            <div
              className="slider"
              style={{
                display: "flex",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div className="slide" key={index} style={{ minWidth: "100%" }}>
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              className="prev"
              onClick={prevSlide}
              style={{
                position: "absolute",
                top: "50%",
                padding: "16px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                fontSize: "24px",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                width: "54px",
                lineHeight: "1",
                left: "10px",
              }}
            >
              &#10094;
            </Button>

            <Button
              className="next"
              onClick={nextSlide}
              style={{
                position: "absolute",
                top: "50%",
                padding: "16px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                fontSize: "24px",
                border: "none",
                cursor: "pointer",
                userSelect: "none",
                transform: "translateY(-50%)",
                borderRadius: "50%",
                width: "54px",
                lineHeight: "1",
                right: "10px",
              }}
            >
              &#10095;
            </Button>
          </div>
        </Container>
      </section>

      {/* About Us*/}
      <section
        id="about-us"
        style={{ backgroundColor: "#f9f9f9", padding: "40px 20px" }}
      >
        <Container>
          <h2
            className="text-center mb-4"
            style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}
          >
            About Us
          </h2>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={8}>
              <Card className="border-0 text-center">
                <Card.Body>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: "#555",
                    }}
                  >
                    <strong>
                      From Learning to Leading: A Journey Together
                    </strong>
                    <br />
                    Welcome to <strong>Karpom Karpipom</strong>, an innovative
                    learning initiative focused on empowering 11th and
                    12th-grade students by making education engaging, impactful,
                    and accessible. Karpom Karpipom is proudly initiated and
                    managed by the <strong>Maatram Alumni Association</strong>,
                    a collective of driven and experienced alumni dedicated to
                    giving back to the community through education.
                  </p>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: "#555",
                    }}
                  >
                    Our vision is to bridge the gap between academic learning
                    and personal development by providing students with focused
                    guidance, interactive learning methods, and mentorship.
                    Karpom Karpipom combines subject expertise with innovative
                    teaching strategies to ensure that students not only perform
                    well academically but also build confidence, leadership, and
                    critical thinking skills.
                  </p>

                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: "#555",
                    }}
                  >
                    The initiative draws on the experience and resources of
                    Maatram's alumni network to create a collaborative and
                    innovative learning environment. Through this platform, we
                    strive to shape the next generation of leaders by focusing
                    on holistic growth, exam success, and skill-building.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  Our Goals Section */}
      <section id="our-goals" style={{ padding: "40px 20px" }}>
        <Container>
          <h2
            className="text-center mb-4"
            style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}
          >
            Our Goals
          </h2>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Achieving Academic Excellence:</strong> Help students
                  build strong foundations in core academic subjects to ensure
                  confidence and success in examinations and higher education.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Adopting Innovative Teaching Methods:</strong>{" "}
                  Integrate modern, interactive, and engaging teaching
                  methodologies to simplify complex subjects and foster
                  curiosity.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Fostering Leadership and Confidence:</strong> Inspire
                  leadership, teamwork, and self-assurance through mentorship
                  and collaborative learning experiences.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Personalized Learning for Every Student:</strong>{" "}
                  Recognize and address the unique learning styles, strengths,
                  and challenges of each student with customized guidance and
                  support.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Preparing for Academic Challenges:</strong> Equip
                  students with focused exam preparation strategies, revision
                  programs, and skills to excel in board exams and other
                  assessments.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    Strengthening Community through Collaboration:{" "}
                  </strong>
                  Leverage the resources and expertise of the Maatram Alumni
                  Association to build a supportive, enriching learning
                  environment for students.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>
                    Connecting Knowledge to Real-World Application:{" "}
                  </strong>
                  Encourage students to connect theoretical knowledge to
                  practical application, ensuring they are ready for higher
                  education and future opportunities.
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="our-goals" className="tagline">
        <h2>Driven by Purpose, Guided by Experience</h2>
        <p>
          With the vision and support of the Maatram Alumni Association, Karpom
          Karpipom is more than a learning program — it's a movement that
          focuses on
          <strong>
            creating opportunities, building confidence, and shaping brighter
            futures
          </strong>
          .
        </p>
        <p>
          Join hands with us as we empower students, foster curiosity, and guide
          them toward leadership, learning, and success.
        </p>
        <p>
          <strong>Together, we learn. Together, we lead !!</strong>
        </p>
      </section>

      {/*Subjects*/}
      <section
        id="featured-courses"
        style={{ padding: "40px 20px", backgroundColor: "white" }}
      >
        <Container>
          <h2
            className="text-center mb-5"
            style={{ fontSize: "32px", fontWeight: "bold" }}
          >
            Featured Subjects
          </h2>
          <Row className="justify-content-center">
            {courses.map((course) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={course.id}
                className="mb-4"
              >
                <Card className="course-card">
                  <Card.Img
                    variant="top"
                    src={course.image}
                    alt={course.title}
                  />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/*Contact*/}
      <section
        id="contact"
        style={{
          backgroundColor: "#f9f9f9",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <Container>
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "30px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Reach out to Us
          </h2>
          <Form
            method="POST"
            style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}
          >
            <Form.Group controlId="name">
              <Form.Label className="mt-2 mb-2"> Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="mt-2 mb-2"> Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" required />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label className="mt-2 mb-2">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your Message"
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="mt-4"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#ff6f61",
                border: "#ff6f61",
              }}
            >
              Send Message
            </Button>
          </Form>
        </Container>
      </section>

      {/*Footer*/}
      <footer
        style={{
          backgroundColor: "#1a1a2e",
          color: "white",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <Container>
          <Row>
            <Col>
              <p
                style={{ fontSize: "14px", color: "#bbb", marginBottom: "0px" }}
              >
                &copy; 2024 Maatram Foundation - All rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
