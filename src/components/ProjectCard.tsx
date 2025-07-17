import './styles/ProjectCard.css';

interface Props {
    id?: string,
    heading: string;
    cardType: string[];
    caption: string;
    tags: string[];
}

function CardType({ cardType }: { cardType: string[] }) {
    if (cardType[0] == "project") {
        return <>
            <div className="img-div">
                <img src={cardType[1]} height="175px" width="175px" style={{borderRadius: "5px"}} />
            </div>
        </>
    } else {
        return <>
            <div className="date-div">
                <p className='date-text'>{cardType[1]}</p>
            </div>
        </>
    }
}

function ProjectCard({ heading, cardType, caption, tags }: Props){
    return <>
        <div className='card-div'>
            <CardType cardType={cardType} />
            <div className='content-div'>
                <h1 className='card-content-head'>{heading}</h1>
                <p className='card-content-body'>{caption}</p>
                <div className="tags-container">
                    {tags.map((tag) => (
                        <p key={tag} className='tag'>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default ProjectCard;