import './styles/ProjectCard.css';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface Props {
    id?: string,
    heading: string;
    cardType: string[];
    caption: string;
    tags: string[];
    link: string;
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

function Link({ link }: { link: string}) {
    if (link != "None") {
        return <a className="card-link-icon" target="_blank" href={link}><FaArrowUpRightFromSquare size={18}/></a>
    } else {
        return <></>
    }
}

function ProjectCard({ heading, cardType, caption, tags, link }: Props){
    return <>
        <div className='card-div'>
            <CardType cardType={cardType} />
            <div className='content-div'>
                <h1 className='card-content-head'>{heading}&nbsp;
                    <Link link={link} />
                </h1>
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