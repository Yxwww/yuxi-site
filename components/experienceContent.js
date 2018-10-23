import '../sass/index.scss';

function ExperienceContent(props) {
  console.log(props)
  const { thumbnails } = props;
  const thumbnailsDivs = thumbnails.map(img =>
    <div
      className='thumbnail'
      style={{ backgroundImage: `url(${img})` }}>
    </div>
  );

  return <div className="container">
    <div className="project-card collapsed">
      <div className='thumbnail-gallery'>
        { thumbnailsDivs }
      </div>
      <div class="content">
        <div>
          <h3 class="text-center">Leapfrog View</h3>
          <p>Frontend software developer of 3D data visualization application <a href="https://www.lfview.com" target="_blank">https://www.lfview.com</a> <br/>  Mainly contribute in state control design, business logic implementation, data structure design, cross-platform performance monitoring,  algorithm optimization, visualization feature implementation, UI design and implementation.</p>
        </div>
        <div class="contributions">
          <ul>
            <li>Lead development of fronted stack</li>
            <li>Provide expertise, and incorporate best practices of frontend stack.</li>
            <li>Design, propose, and implement advanced state control system.</li>
            <li>Participate in design and implementation of the full aspect of frontend stack includes 2D/3D visualization, UI components, and overall application state control.</li>
            <li>Diagnose and contribute on frontend stack performance optimization, greatly improve performance and reduce error occurrences. </li>
            <li>Refactoring frontend to improve overall code quality in terms of scalability, reusability, extensibility, composability, maintainability and readability</li>
            <li>Setup frontend test environment and encourage test driven development</li>
            <li>Collaborative design and implementation with team</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
}

export default ExperienceContent;
