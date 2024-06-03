const NotFoundPage = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        transformStyle: "preserve-3d",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        fontSize: 26,
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          transformStyle: "preserve-3d",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            transformStyle: "preserve-3d",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              transformStyle: "preserve-3d",
              display: "block",
              position: "relative",
              zIndex: 0,
              padding: "0 12px",
              lineHeight: "1.4",
            }}
          >
            404&nbsp;error
          </span>
          <span
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              transformStyle: "preserve-3d",
              display: "block",
              position: "relative",
              zIndex: 0,
              padding: "0 12px",
              lineHeight: "1.4",
            }}
          >
            page&nbsp;not&nbsp;found
          </span>
        </div>
        <svg
          viewBox="0 0 200 600"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            transformStyle: "preserve-3d",
            width: 50,
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <polygon
            points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 200 591.044514 200 8"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              transformStyle: "preserve-3d",
              fill: "#343434",
            }}
          />
        </svg>
      </div>
      <svg
        className="crack"
        viewBox="0 0 200 600"
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          transformStyle: "preserve-3d",
          width: 50,
          height: "auto",
          position: "relative",
          zIndex: 4,
          marginLeft: "-50px",
        }}
      >
        <polyline
          points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            transformStyle: "preserve-3d",
            fill: "none",
            stroke: "#F04F54",
            strokeWidth: 10,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "1649.099",
            strokeDashoffset: "1649.099",
            WebkitAnimation: "drawStroke 1500ms ease-out 500ms forwards",
            animation: "drawStroke 1500ms ease-out 500ms forwards",
          }}
        />
      </svg>
      <div
        style={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          transformStyle: "preserve-3d",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 200 600"
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            transformStyle: "preserve-3d",
            width: 50,
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <polygon
            points="118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 0 591.044514 0 8"
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              transformStyle: "preserve-3d",
              fill: "#343434",
            }}
          />
        </svg>
        <div
          style={{
            boxSizing: "border-box",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            transformStyle: "preserve-3d",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              transformStyle: "preserve-3d",
              display: "block",
              position: "relative",
              zIndex: 0,
              padding: "0 12px",
              lineHeight: "1.4",
            }}
          >
            sorry&nbsp;about&nbsp;that!
          </span>
          <span
            style={{
              boxSizing: "border-box",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              transformStyle: "preserve-3d",
              display: "block",
              position: "relative",
              zIndex: 0,
              padding: "0 12px",
              lineHeight: "1.4",
            }}
          >
            <a
              style={{
                boxSizing: "border-box",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                transformStyle: "preserve-3d",
                display: "block",
                cursor: "pointer",
                WebkitAnimation: "pulseColor 1000ms linear 3100ms forwards",
                animation: "pulseColor 1000ms linear 3100ms forwards",
                fontWeight: 500,
              }}
              href="/home"
            >
              <b
                style={{
                  boxSizing: "border-box",
                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  transformStyle: "preserve-3d",
                }}
              >
                return&nbsp;home?
              </b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
