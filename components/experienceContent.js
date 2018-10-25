import '../sass/index.scss';
import { map } from 'ramda';
import shortid from 'shortid'
// this whole key in list is weird

const createContributionList = map((contribution) => <li key={shortid.generate()}>{contribution}</li>)
const createThumbnailDivs = map((img) => <div key={shortid.generate()} className='thumbnail' style={{ backgroundImage: `url(${img})` }}></div>)

function ExperienceContent(props) {
    const experienceSections = props.experience.map((exp,i) => {
        const {
            thumbnails,
            description,
            contributions,
            product,
        } = exp;
        const thumbnailsDivs = createThumbnailDivs(thumbnails)
        const contributionLists = createContributionList(contributions);

        return <div key={shortid.generate()} className="project-card collapsed">
            <div className='thumbnail-gallery'>
                { thumbnailsDivs }
            </div>
            <div className="content">
                <div>
                    <h3 className="text-center">{ product }</h3>
                    <p>{description}</p>
                </div>
                <div className="contributions">
                    <ul>
                        {contributionLists}
                    </ul>
                </div>
            </div>

        </div>
    })


  return <div className="container">
      { experienceSections }
      </div>
}

export default ExperienceContent;
