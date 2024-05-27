function Frame(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
      {...props}
    />
  );
}

const frameOptions = {
  width: 1200,
  height: 630,
};

export { Frame as default, frameOptions };
