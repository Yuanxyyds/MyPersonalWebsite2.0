import { useState, useEffect } from 'react';
import { BsGithub } from "react-icons/bs";
import "./../../style/project/featured-project-card.css";

const FeaturedProjectCard = ({
    imageSrc,
    logoSrc,
    title,
    description,
    shortDescription,
    githubLink,
    tags,
    detailText = "Demo",
    onDetailClick,
}) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div
            className={`featured-project-card ${showOverlay ? 'active' : ''}`}
            onMouseEnter={() => setShowOverlay(true)}
            onMouseLeave={() => setShowOverlay(false)}
        >
            <div className="image-wrapper">
                <img className="card-image" src={imageSrc} alt={title} />

                {showOverlay && (
                    <div className="card-overlay" >
                        {logoSrc && (
                            <div className="project-logo mb-1">
                                <img className="project-logo" src={logoSrc} alt="Logo" />
                            </div>
                        )}
                        <p className={`${isMobile ? 'small' : 'md'} m-0`}>{isMobile ? (shortDescription ?? description) : description}</p>
                        <div className="tag-group">
                            {tags.map((tag, i) => (
                                <p className="tag small m-0" key={i}>{tag}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="card-footer">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>

                    <h4 className="m-0 bold">{title}</h4>
                    {githubLink && (
                        <a
                            href={githubLink}
                            className="github-icon"
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer">
                            <BsGithub />
                        </a>
                    )}
                </div>

                {onDetailClick && (
                    <div
                        className="demo-link"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDetailClick();
                        }}>
                        {detailText}
                    </div>
                )}
            </div>

        </div>
    );
}

export default FeaturedProjectCard;
