import '../sass/index.scss';

function ExperienceContent(props) {
  console.log(props)
  const {
    thumbnails,
    description,
    contributions,
  } = props.experience;
  const thumbnailsDivs = thumbnails.map(img =>
    <div
      className='thumbnail'
      style={{ backgroundImage: `url(${img})` }}>
    </div>
  );
  const contributionLists = contributions.map(contribution =>
    <li>{contribution}</li>)

  return <div className="container">
    <div className="project-card collapsed">
      <div className='thumbnail-gallery'>
        { thumbnailsDivs }
      </div>
      <div class="content">
        <div>
          <h3 class="text-center">Leapfrog View</h3>
          <p>{description}</p>
        </div>
        <div class="contributions">
          <ul>
            {contributionLists}
          </ul>
        </div>
      </div>

    </div>
  </div>
}

export default ExperienceContent;
