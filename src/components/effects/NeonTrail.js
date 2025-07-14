export function initNeonTrail() {
    const trailContainer = document.body;
    let lastTime = performance.now();
    let lastX = 0;
    let lastY = 0;
    let maxVelocity = 0;
    let movementActive = false;
    const VELOCITY_THRESHOLD = 0.05;

    function handleMove(x, y) {
        const now = performance.now();
        const dt = now - lastTime;
        const dx = x - lastX;
        const dy = y - lastY;
        let velocity = Math.sqrt(dx * dx + dy * dy) / dt || 0;
        velocity = Math.min(velocity, 8);

        if (velocity > VELOCITY_THRESHOLD) {
            movementActive = true;
            maxVelocity = Math.max(maxVelocity, velocity);
        } else if (movementActive) {
            movementActive = false;
            maxVelocity = 0;
            return;
        }

        const direction = {
            x: dx / dt || 0,
            y: dy / dt || 0,
        };

        createTrail(x, y, velocity, maxVelocity, direction);
        lastTime = now;
        lastX = x;
        lastY = y;
    }

    // Event handlers with references for removal
    const mouseMoveHandler = (e) => handleMove(e.pageX, e.pageY);
    const touchMoveHandler = (e) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            handleMove(touch.pageX, touch.pageY);
        }
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("touchmove", touchMoveHandler, { passive: true });

    function createTrail(x, y, velocity, maxVelocity, direction) {
        const trail = document.createElement("div");
        trail.className = "neon-trail";

        const hue = (performance.now() / 10) % 360;
        const color = `hsl(${hue}, 100%, 60%)`;

        const initialBlur = 3 + maxVelocity * 5;
        const maxBlur = initialBlur + maxVelocity * 2;
        const duration = 500;
        const friction = 0.2;

        let posX = x;
        let posY = y;
        let velX = direction.x * velocity * 2;
        let velY = direction.y * velocity * 2;

        trail.style.position = "absolute";
        trail.style.left = `${posX}px`;
        trail.style.top = `${posY}px`;
        trail.style.backgroundColor = color;
        trailContainer.appendChild(trail);

        let start = null;

        function linearPeak(t) {
            if (t <= 0.3) return (10 / 3) * t;
            if (t <= 1) return -(10 / 7) * (t - 0.3) + 1;
            return 0;
        }

        function animate(timestamp) {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progress = elapsed / duration;
            const blur = initialBlur + (maxBlur - initialBlur) * (progress ** 2);
            const opacity = linearPeak(progress) * 0.6;

            velX *= friction;
            velY *= friction;
            posX += velX;
            posY += velY;

            trail.style.left = `${posX}px`;
            trail.style.top = `${posY}px`;
            trail.style.boxShadow = `0 0 ${blur}px ${blur / 2}px ${color}`;
            trail.style.opacity = opacity;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                trail.remove();
            }
        }

        requestAnimationFrame(animate);
    }

    // ✅ Return cleanup function to disable trail
    return () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("touchmove", touchMoveHandler);
    };
}
