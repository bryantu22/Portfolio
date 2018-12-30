import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container">
        {this.props.projects.map((project, index) => {
          return (
            <ProjectCard
              projectTitle={project.title}
              projectDescription={project.description}
              projectSkills={project.skills}
              projectLinks={project.links}
              projectScreenshot={project.screenshot}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

class ProjectCard extends React.Component {
  componentDidMount() {
    this.refs.screenshot.style.background =
      "url('images/" + this.props.projectScreenshot + "')";
    this.refs.screenshot.style.backgroundSize = "cover";
    this.refs.screenshot.style.backgroundRepeat = "no-repeat";
  }
  render() {
    return (
      <div className="project-card">
        <div className="project-screenshot" ref="screenshot" />
        <div className="project-background" />
        <div className="project-content">
          <h3>{this.props.projectTitle}</h3>
          <p
            dangerouslySetInnerHTML={{ __html: this.props.projectDescription }}
          />
          <ProjectSkills skills={this.props.projectSkills} />
          <ProjectLinks links={this.props.projectLinks} />
        </div>
      </div>
    );
  }
}

class ProjectSkills extends React.Component {
  render() {
    return (
      <div className="project-skills">
        {this.props.skills.map((skill, index) => {
          return <ProjectSkill skill={skill} key={index} />;
        })}
      </div>
    );
  }
}

class ProjectSkill extends React.Component {
  render() {
    return <span className="project-skill">{this.props.skill}</span>;
  }
}

class ProjectLinks extends React.PureComponent {
  render() {
    const { github, preview } = this.props.links;
    return (
      <div className="project-links">
        <a
          href={preview}
          rel="noopener"
          target="_blank"
          className="project-link"
        >
          Live Demo <FontAwesomeIcon icon="external-link-alt" />
        </a>
        <a
          href={github}
          rel="noopener"
          target="_blank"
          className="project-link secondary"
        >
          <FontAwesomeIcon icon={["fab", "github"]} /> View Source
        </a>
      </div>
    );
  }
}

export default Projects;
