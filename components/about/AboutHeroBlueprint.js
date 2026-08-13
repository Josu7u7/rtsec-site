"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutHeroBlueprint() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 1025px)",
          tablet: "(min-width: 769px) and (max-width: 1024px)",
          mobile: "(max-width: 768px)",
        },
        (context) => {
          const { desktop, tablet, mobile } = context.conditions;

          /* ================================================
             PREPARE LINES
          ================================================= */

          const drawPaths = gsap.utils.toArray(
            ".rtsec-fabric-draw"
          );

          drawPaths.forEach((path) => {
            const length =
              typeof path.getTotalLength === "function"
                ? path.getTotalLength()
                : 1000;

            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });
          });

          gsap.set(".rtsec-fabric-node", {
            opacity: 0,
            scale: 0.55,
            transformOrigin: "center center",
          });

          gsap.set(".rtsec-fabric-endpoint", {
            opacity: 0,
            scale: 0.9,
          });

          gsap.set(".rtsec-fabric-label", {
            opacity: 0,
            y: 7,
          });

          /* ================================================
             INTRO SEQUENCE
          ================================================= */

          const intro = gsap.timeline({
            delay: 0.55,
          });

          intro
            .to(".rtsec-fabric-base", {
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
            })

            .to(
              ".rtsec-fabric-core",
              {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "back.out(1.8)",
              },
              0.1
            )

            .to(
              drawPaths,
              {
                strokeDashoffset: 0,
                duration: 1.5,
                stagger: 0.045,
                ease: "power2.inOut",
              },
              0.25
            )

            .to(
              ".rtsec-fabric-node",
              {
                opacity: 1,
                scale: 1,
                duration: 0.45,
                stagger: 0.055,
                ease: "back.out(1.7)",
              },
              0.65
            )

            .to(
              ".rtsec-fabric-endpoint",
              {
                opacity: 1,
                scale: 1,
                duration: 0.65,
                stagger: 0.09,
                ease: "power3.out",
              },
              0.95
            )

            .to(
              ".rtsec-fabric-label",
              {
                opacity: 1,
                y: 0,
                duration: 0.55,
                stagger: 0.05,
                ease: "power2.out",
              },
              1.1
            );

          /* ================================================
             FLOW LINES
          ================================================= */

          gsap.utils
            .toArray(".rtsec-fabric-flow")
            .forEach((path, index) => {
              gsap.to(path, {
                strokeDashoffset: -140,
                duration: 3.8 + index * 0.35,
                repeat: -1,
                ease: "none",
              });
            });

          /* ================================================
             PULSING NODES
          ================================================= */

          gsap.utils
            .toArray(".rtsec-fabric-pulse")
            .forEach((node, index) => {
              gsap.to(node, {
                scale: 1.55,
                opacity: 0.22,
                transformOrigin: "center center",
                duration: 1.7 + index * 0.13,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            });

          /* ================================================
             ORBITAL BREATHING
          ================================================= */

          gsap.to(".rtsec-fabric-ring-one", {
            rotation: 2.2,
            transformOrigin: "center center",
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(".rtsec-fabric-ring-two", {
            rotation: -1.6,
            transformOrigin: "center center",
            duration: 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          /* ================================================
             ENDPOINT FLOAT
          ================================================= */

          gsap.to(".rtsec-fabric-endpoint-cloud", {
            y: -5,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(".rtsec-fabric-endpoint-remote", {
            y: 4,
            duration: 5.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(".rtsec-fabric-endpoint-office", {
            y: -4,
            duration: 5.7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(".rtsec-fabric-endpoint-dc", {
            y: 5,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          /* ================================================
             MOUSE PARALLAX
          ================================================= */

          const handlePointerMove = (event) => {
            if (!desktop) return;

            const rect = root.getBoundingClientRect();

            const x =
              (event.clientX - rect.left) / rect.width - 0.5;

            const y =
              (event.clientY - rect.top) / rect.height - 0.5;

            gsap.to(".rtsec-fabric-grid", {
              x: x * 4,
              y: y * 3,
              duration: 1,
              ease: "power3.out",
            });

            gsap.to(".rtsec-fabric-network", {
              x: x * 10,
              y: y * 7,
              duration: 1,
              ease: "power3.out",
            });

            gsap.to(".rtsec-fabric-endpoints", {
              x: x * 15,
              y: y * 10,
              duration: 1,
              ease: "power3.out",
            });
          };

          root.addEventListener(
            "pointermove",
            handlePointerMove
          );

          return () => {
            root.removeEventListener(
              "pointermove",
              handlePointerMove
            );
          };
        }
      );

      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="rtsec-fabric"
      aria-hidden="true"
    >
      <div className="rtsec-fabric-glow" />

      <div className="rtsec-fabric-grid" />

      <svg
        className="rtsec-fabric-svg"
        viewBox="0 0 1200 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ==================================================
            GLOBAL BASE
        =================================================== */}

        <g className="rtsec-fabric-base">
          <path
            d="M325 145H875"
            className="rtsec-fabric-measure"
          />

          <path
            d="M325 755H875"
            className="rtsec-fabric-measure"
          />

          <path
            d="M305 165V735"
            className="rtsec-fabric-measure"
          />

          <path
            d="M895 165V735"
            className="rtsec-fabric-measure"
          />
        </g>

        {/* ==================================================
            NETWORK FABRIC
        =================================================== */}

        <g className="rtsec-fabric-network">
          {/* OUTER RING */}

          <ellipse
            cx="600"
            cy="450"
            rx="270"
            ry="245"
            className="rtsec-fabric-ring rtsec-fabric-ring-one rtsec-fabric-draw"
          />

          {/* INNER RING */}

          <ellipse
            cx="600"
            cy="450"
            rx="185"
            ry="165"
            className="rtsec-fabric-ring rtsec-fabric-ring-two rtsec-fabric-draw"
          />

          {/* CENTRAL VERTICAL */}

          <path
            d="M600 205V695"
            className="rtsec-fabric-link rtsec-fabric-draw"
          />

          {/* CENTRAL HORIZONTAL */}

          <path
            d="M330 450H870"
            className="rtsec-fabric-link rtsec-fabric-draw"
          />

          {/* DIAGONAL LINKS */}

          <path
            d="M395 285L805 615"
            className="rtsec-fabric-link rtsec-fabric-draw"
          />

          <path
            d="M805 285L395 615"
            className="rtsec-fabric-link rtsec-fabric-draw"
          />

          {/* UPPER GRID */}

          <path
            d="M445 250L600 320L755 250"
            className="rtsec-fabric-link rtsec-fabric-draw"
          />

          {/* LOWER GRID */}

          <path
            d="M445 650L600 580L755 650"
            className="rtsec-fabric-link rtsec-fabric-draw"
          />

          {/* LEFT GRID */}

          <path
            d="M350 450L445 365L445 535L350 450"
            className="rtsec-fabric-link rtsec-fabric-draw"
          />

          {/* RIGHT GRID */}

          <path
            d="M850 450L755 365L755 535L850 450"
            className="rtsec-fabric-link rtsec-fabric-draw"
          />

          {/* ACTIVE FLOW PATHS */}

          <path
            d="M600 205V695"
            className="rtsec-fabric-flow"
          />

          <path
            d="M330 450H870"
            className="rtsec-fabric-flow"
          />

          <path
            d="M395 285L805 615"
            className="rtsec-fabric-flow rtsec-fabric-flow-soft"
          />

          {/* ==================================================
              CORE
          =================================================== */}

          <circle
            cx="600"
            cy="450"
            r="56"
            className="rtsec-fabric-core"
          />

          <circle
            cx="600"
            cy="450"
            r="22"
            className="rtsec-fabric-core-inner"
          />

          <circle
            cx="600"
            cy="450"
            r="34"
            className="rtsec-fabric-pulse rtsec-fabric-core-pulse"
          />

          {/* ==================================================
              MAIN NODES
          =================================================== */}

          <circle
            cx="600"
            cy="205"
            r="25"
            className="rtsec-fabric-node"
          />

          <circle
            cx="600"
            cy="695"
            r="25"
            className="rtsec-fabric-node"
          />

          <circle
            cx="330"
            cy="450"
            r="25"
            className="rtsec-fabric-node"
          />

          <circle
            cx="870"
            cy="450"
            r="25"
            className="rtsec-fabric-node"
          />

          {/* UPPER INNER */}

          <circle
            cx="445"
            cy="285"
            r="20"
            className="rtsec-fabric-node"
          />

          <circle
            cx="600"
            cy="320"
            r="20"
            className="rtsec-fabric-node"
          />

          <circle
            cx="755"
            cy="285"
            r="20"
            className="rtsec-fabric-node"
          />

          {/* MID INNER */}

          <circle
            cx="445"
            cy="450"
            r="20"
            className="rtsec-fabric-node"
          />

          <circle
            cx="755"
            cy="450"
            r="20"
            className="rtsec-fabric-node"
          />

          {/* LOWER INNER */}

          <circle
            cx="445"
            cy="615"
            r="20"
            className="rtsec-fabric-node"
          />

          <circle
            cx="600"
            cy="580"
            r="20"
            className="rtsec-fabric-node"
          />

          <circle
            cx="755"
            cy="615"
            r="20"
            className="rtsec-fabric-node"
          />

          {/* ACTIVE PULSES */}

          <circle
            cx="445"
            cy="285"
            r="8"
            className="rtsec-fabric-pulse"
          />

          <circle
            cx="755"
            cy="285"
            r="8"
            className="rtsec-fabric-pulse"
          />

          <circle
            cx="870"
            cy="450"
            r="8"
            className="rtsec-fabric-pulse"
          />

          <circle
            cx="445"
            cy="615"
            r="8"
            className="rtsec-fabric-pulse"
          />
        </g>

        {/* ==================================================
            EXTERNAL ENDPOINT CONNECTIONS
        =================================================== */}

        <g className="rtsec-fabric-endpoints">
          {/* REMOTE */}

          <path
            d="M395 285L240 185"
            className="rtsec-fabric-external rtsec-fabric-draw"
          />

          <path
            d="M395 285L240 185"
            className="rtsec-fabric-flow rtsec-fabric-flow-soft"
          />

          {/* CLOUD */}

          <path
            d="M805 285L960 185"
            className="rtsec-fabric-external rtsec-fabric-draw"
          />

          <path
            d="M805 285L960 185"
            className="rtsec-fabric-flow rtsec-fabric-flow-soft"
          />

          {/* OFFICE */}

          <path
            d="M395 615L240 715"
            className="rtsec-fabric-external rtsec-fabric-draw"
          />

          {/* DATA CENTER */}

          <path
            d="M805 615L960 715"
            className="rtsec-fabric-external rtsec-fabric-draw"
          />

          {/* ==================================================
              REMOTE ENDPOINT
          =================================================== */}

          <g className="rtsec-fabric-endpoint rtsec-fabric-endpoint-remote">
            <circle
              cx="180"
              cy="150"
              r="72"
              className="rtsec-fabric-endpoint-circle"
            />

            <rect
              x="154"
              y="123"
              width="52"
              height="35"
              rx="4"
              className="rtsec-fabric-icon"
            />

            <path
              d="M166 169H194"
              className="rtsec-fabric-icon"
            />

            <path
              d="M180 158V169"
              className="rtsec-fabric-icon"
            />

            <text
              x="180"
              y="198"
              textAnchor="middle"
              className="rtsec-fabric-label rtsec-fabric-endpoint-label"
            >
              REMOTE
            </text>
          </g>

          {/* ==================================================
              CLOUD ENDPOINT
          =================================================== */}

          <g className="rtsec-fabric-endpoint rtsec-fabric-endpoint-cloud">
            <circle
              cx="1020"
              cy="150"
              r="72"
              className="rtsec-fabric-endpoint-circle"
            />

            <path
              d="
                M986 147
                C986 130 998 120 1013 120
                C1020 106 1042 106 1050 121
                C1068 121 1077 132 1077 146
                C1077 161 1066 170 1050 170
                H1007
                C994 170 986 162 986 147
              "
              className="rtsec-fabric-icon"
            />

            <text
              x="1020"
              y="198"
              textAnchor="middle"
              className="rtsec-fabric-label rtsec-fabric-endpoint-label"
            >
              CLOUD
            </text>
          </g>

          {/* ==================================================
              OFFICE ENDPOINT
          =================================================== */}

          <g className="rtsec-fabric-endpoint rtsec-fabric-endpoint-office">
            <circle
              cx="180"
              cy="750"
              r="72"
              className="rtsec-fabric-endpoint-circle"
            />

            <rect
              x="150"
              y="710"
              width="23"
              height="40"
              className="rtsec-fabric-icon"
            />

            <rect
              x="180"
              y="697"
              width="25"
              height="53"
              className="rtsec-fabric-icon"
            />

            <rect
              x="212"
              y="720"
              width="17"
              height="30"
              className="rtsec-fabric-icon"
            />

            <text
              x="180"
              y="790"
              textAnchor="middle"
              className="rtsec-fabric-label rtsec-fabric-endpoint-label"
            >
              OFFICES
            </text>
          </g>

          {/* ==================================================
              DATA CENTRE ENDPOINT
          =================================================== */}

          <g className="rtsec-fabric-endpoint rtsec-fabric-endpoint-dc">
            <circle
              cx="1020"
              cy="750"
              r="72"
              className="rtsec-fabric-endpoint-circle"
            />

            <rect
              x="994"
              y="704"
              width="52"
              height="58"
              rx="4"
              className="rtsec-fabric-icon"
            />

            <line
              x1="1004"
              y1="718"
              x2="1036"
              y2="718"
              className="rtsec-fabric-icon"
            />

            <line
              x1="1004"
              y1="733"
              x2="1036"
              y2="733"
              className="rtsec-fabric-icon"
            />

            <line
              x1="1004"
              y1="748"
              x2="1036"
              y2="748"
              className="rtsec-fabric-icon"
            />

            <text
              x="1020"
              y="790"
              textAnchor="middle"
              className="rtsec-fabric-label rtsec-fabric-endpoint-label"
            >
              DATA CENTRE
            </text>
          </g>
        </g>

        {/* ==================================================
            MICRO LABELS
        =================================================== */}

        <g>
          <text
            x="540"
            y="90"
            className="rtsec-fabric-label rtsec-fabric-meta"
          >
            RTSEC / CONNECTED INFRASTRUCTURE
          </text>

          <text
            x="540"
            y="830"
            className="rtsec-fabric-label rtsec-fabric-meta"
          >
            SECURITY · NETWORK · ACCESS · CONTINUITY
          </text>
        </g>
      </svg>
    </div>
  );
}