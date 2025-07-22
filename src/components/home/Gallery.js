import { useRef, useEffect, useState } from "react";
import './../../style/home/scroll-image.css';

const XS_BREAKPOINT = 767;

export const ScrollImage = ({
    src,
    speed = 1,
    className = "",
    wrapperWidth = "80%",
    initialOffset = 0,
    z = 0,
    overlayText,
    overlayAction = () => { },
    tag,
    tagLocation = "10%"
}) => {
    const wrapperRef = useRef(null);
    const imgRef = useRef(null);
    const [aspectRatio, setAspectRatio] = useState(9 / 16);
    const [isXS, setIsXS] = useState(false);

    // Detect if screen is xs on mount and resize
    useEffect(() => {
        const checkSize = () => setIsXS(window.innerWidth < XS_BREAKPOINT);
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    // Calculate aspect ratio only if not xs
    useEffect(() => {
        const img = imgRef.current;
        const handleLoad = () => {
            if (img?.naturalWidth && img?.naturalHeight) {
                setAspectRatio(img.naturalWidth / img.naturalHeight);
            }
        };
        if (img) {
            img.onload = handleLoad;
            if (img.complete) handleLoad();
        }
        return () => {
            if (img) img.onload = null;
        };
    }, [src]);

    // Scroll effect only if not xs
    useEffect(() => {
        if (isXS) return;

        const handleScroll = () => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const rect = wrapper.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const start = windowHeight;
            const end = -rect.height;
            const progress = (rect.top + initialOffset - end) / (start - end);
            const clamped = Math.min(1, Math.max(0, progress));
            const frameTranslate = initialOffset + (1 - clamped) * (start - end) * (speed - 1);
            const translateY = -frameTranslate;
            wrapper.style.transform = `translateY(${translateY}px)`;

            const fadeStart = 0.3 * windowHeight;
            let opacity = (windowHeight - rect.top) / fadeStart;
            opacity = Math.min(1, Math.max(0, opacity));
            wrapper.style.opacity = opacity;
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [speed, initialOffset, isXS]);

    // ✅ xs mode: just show image
    if (isXS) {
        return (
            <div
                className={`image-wrapper mb-4`}
                style={{
                    aspectRatio,
                    width: wrapperWidth,
                    zIndex: z,
                    transform: 'none',
                }}>
                <img src={src} alt="" loading="lazy" />
                {tag !== undefined && (
                    <div className="image-tag" style={{ top: tagLocation }}>
                        {tag}
                    </div>
                )}
                {overlayText !== undefined &&
                    <div className="hover-overlay" onClick={overlayAction}>
                        <div className="overlay-text">{overlayText}</div>
                    </div>
                }

            </div>
        );
    }

    // 💡 non-xs full animated version
    return (
        <div
            className={`image-wrapper mb-0 ${className}`}
            ref={wrapperRef}
            style={{
                aspectRatio,
                width: wrapperWidth,
                opacity: 0,
                zIndex: z,
                minWidth: '300px'
            }}
        >
            <img src={src} ref={imgRef} alt="" loading="lazy" />
            {tag !== undefined && (
                <div className="image-tag" style={{ top: tagLocation }}>
                    {tag}
                </div>
            )}
            {overlayText !== undefined &&
                <div className="hover-overlay" onClick={overlayAction}>
                    <div className="overlay-text">{overlayText}</div>
                </div>
            }
        </div>
    );
};


export const StickyText = ({ text = "Gallery", targetId = "gallery", fadeStartId = "first-image", fadeEndId }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const targetObject = document.getElementById(targetId);
            const fadeStart = document.getElementById(fadeStartId);
            if (!targetObject || !fadeStart) return;

            const targetRect = targetObject.getBoundingClientRect();
            const fadeStartRect = fadeStart.getBoundingClientRect();
            const fadeStartY = fadeStartRect.top;

            let galleryBottomY = 0;

            if (fadeEndId !== undefined) {
                const targetEndObject = document.getElementById(fadeStartId);
                const targetEndRect = targetEndObject.getBoundingClientRect();
                galleryBottomY = targetEndRect.bottom;
            } else {
                galleryBottomY = targetRect.bottom;
            }

            const vh = window.innerHeight * 1.1;


            if (fadeStartY >= vh) {
                // Not reached fade start yet
                setOpacity(0);
            } else if (galleryBottomY <= 0) {
                // Gallery is completely out of view
                setOpacity(0);
            } else {
                // Between fade start and gallery bottom — interpolate
                const totalFadeDistance = 0.45 * vh + galleryBottomY - fadeStartY;
                const distanceScrolled = Math.max(0, vh - fadeStartY);
                const progress = distanceScrolled / totalFadeDistance;


                const newOpacity = Math.min(progress < 0.4 ? (1 - progress) ** 0.5 : Math.max(0, (1 - progress)) ** 1.5, 1);
                setOpacity(newOpacity);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [targetId, fadeStartId, fadeEndId]);

    return (
        <h3
            style={{
                position: 'fixed',
                color: 'white',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity,
                zIndex: -1,
                textAlign: 'center',
                width: '100%',
                pointerEvents: 'none',
                transition: 'opacity 0.1s ease-in-out',
            }}
        >
            {text}
        </h3>
    );
};
