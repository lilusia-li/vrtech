export default function Button(props) {
  const { style, children } = props;
  return (
    <button
      className={`flex items-center justify-center font-medium rounded-[20px] cursor-pointer text-white p-[0.8em] ${style}`}
      style={{
        backgroundImage:
          "linear-gradient(0turn,rgba(33,155,227,1) 0%,rgba(36,119,168,1) 100%)",
      }}
    >
      {children}
    </button>
  );
}
