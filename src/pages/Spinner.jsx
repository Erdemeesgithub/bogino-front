

const SpinnerW = () => {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(174, 226, 242)",
        }}
      >
  
        <div
          style={{
            width: 80,
            height: 80,
            border: "5px solid #fff",
            borderRadius: "50%",
            borderLeft: "none",
            borderTop: "none",
            animation: "spin",
            animationDuration: "500ms",
            animationIterationCount: "infinite",
          }}
        ></div>
      </div>
    );
  };
  export default SpinnerW;
  