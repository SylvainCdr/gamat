import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

// Settings
const settings = {
  colors: {
    background: "transparent",
    fill: "#a3d8f4",
    stroke: "#21504b",
  },
  plant: {
    maxHeight: 0.75,
    minHeight: 0.45,
    minNodes: 3,
    maxNodes: 6,
    strokeWidth: 2,
  },
};

const getRandFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Leaf Component
const Leaf = ({ x, y, size, side, id, delay }) => {
  const hasSolidFill = Math.random() > 0.75;
  const hasMainStem = !hasSolidFill && Math.random() > 0.3;
  const rotation = getRandFromRange(40, 70) * side;

  const middle = size / 2;
  const width = size / 3;
  const leafPath = `M ${x} ${y} Q ${x - width} ${y - middle} ${x} ${
    y - size
  } Q ${x + width} ${y - middle} ${x} ${y} Z`;

  return (
    <g transform={`rotate(${rotation} ${x} ${y})`}>
      <g
        className={styles.leaf}
        style={{
          animationDelay: `${delay}s`,
          transformOrigin: `${x}px ${y}px`,
        }}
      >
        <defs>
          <clipPath id={`leaf-${id}`} clipPathUnits="userSpaceOnUse">
            <path d={leafPath} />
          </clipPath>
        </defs>
        <path
          className={styles.outline}
          d={leafPath}
          fill={hasSolidFill ? settings.colors.stroke : settings.colors.fill}
        />
        {hasMainStem && (
          <path
            className={styles.leafStem}
            d={`M ${x} ${y} L ${x} ${y - size}`}
          />
        )}
      </g>
    </g>
  );
};

// Plant Component
const Plant = ({ x, y, minHeight, maxHeight, id, baseDelay }) => {
  const height = getRandFromRange(minHeight, maxHeight);
  const nodes = getRandFromRange(
    settings.plant.minNodes,
    settings.plant.maxNodes
  );
  const step = height / nodes;

  return (
    <g className={styles.plant}>
      <path
        className={styles.stem}
        d={`M ${x} ${y} L ${x} ${y - height}`}
        style={{
          strokeDasharray: height,
          strokeDashoffset: height,
          animationDelay: `${baseDelay}s`,
        }}
      />
      {[...Array(nodes)].map((_, i) => {
        const leafY = y - step * (i + 1);
        const size = height * 0.35 - height * 0.045 * i;
        const leafDelay = baseDelay + (i + 1) * 0.3;

        return (
          <g className={styles.leaves} key={`leaf-group-${i}`}>
            <Leaf
              x={x}
              y={leafY}
              size={size}
              side={1}
              id={`${id}-${i}L`}
              delay={leafDelay}
            />
            <Leaf
              x={x}
              y={leafY}
              size={size}
              side={-1}
              id={`${id}-${i}R`}
              delay={leafDelay + 0.1}
            />
          </g>
        );
      })}
    </g>
  );
};

// Main Scene Component
export default function PlantAnimation({
  plantCount = 4,
  className = "",
  backgroundColor = "transparent",
}) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [key, setKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Intersection Observer - trigger animation when section is 40% visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setKey(Math.random()); // Trigger animation
        }
      },
      {
        threshold: 0.4, // 40% of the element must be visible
        rootMargin: "0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const { width, height } = dimensions;
  const maxPlantHeight = height * settings.plant.maxHeight;
  const margin = maxPlantHeight / settings.plant.maxNodes;
  const plantSection = (width - 2 * margin) / plantCount;

  return (
    <div
      ref={containerRef}
      className={`${styles.animationContainer} ${className}`}
    >
      {isVisible && (
        <svg
          key={key}
          className={styles.scene}
          stroke={settings.colors.stroke}
          strokeWidth={settings.plant.strokeWidth}
          strokeLinecap="round"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMax slice"
        >
          <rect
            x={0}
            y={0}
            height={height}
            width={width}
            fill={backgroundColor}
            stroke="none"
          />
          {[...Array(plantCount)].map((_, i) => (
            <Plant
              key={`plant-${i}-${key}`}
              id={i}
              x={margin + (i + 0.5) * plantSection}
              y={height}
              maxHeight={height * settings.plant.maxHeight}
              minHeight={height * settings.plant.minHeight}
              baseDelay={i * 0.5}
            />
          ))}
        </svg>
      )}
    </div>
  );
}
